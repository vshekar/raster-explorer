
from dash import Dash, html, dcc
import plotly.express as px
import pandas as pd
from tiled.client import from_uri

app = Dash("Raster Explorer")
client = from_uri('http://localhost:8000')
# assume you have a "long-form" data frame
# see https://plotly.com/python/px-arguments/ for more options

data = client['00LysTest01_1']['Lys01_Raster_36_master']['entry']['data']

rows = len(data)
cols = data['data_000001'].shape[0]

table_rows = []
for row in range(rows):
    table_cols = []
    for col in range(cols):
        table_cols.append(html.Td(html.Button(f"{row} {col}", id=f"{row},{col}")))
    table_rows.append(html.Tr(table_cols))

table_body = [html.Tbody([*table_rows])]

fig = px.imshow(data['data_000001'][0], range_color=[0,5])
fig.update_layout(dragmode="drawrect", height=1000, width=1000)



app.layout = html.Div(children=[
    html.H1(children='Raster Explorer'),
    html.Div(children=f'''
    Select cell in the grid to view the associated image. Use histogram to filter unwanted points.
    Rows = {rows}, Columns = {cols}
    '''),
    html.Table(table_body),
    dcc.Graph(figure=fig),
])

if __name__ == '__main__':
    app.run_server(debug=True)