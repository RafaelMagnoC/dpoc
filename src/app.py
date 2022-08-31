from flask import Flask
from flask import render_template
from controllers import mapa
from controllers import IndicadoresController
import json

app = Flask(__name__)

@app.route("/")
def index():
  mapaBrasil = mapa.Map()
  mapaBrasil.createMap()
  mapaBrasil.moveFileMap()
  return render_template("index.html")

@app.route("/dados")
def dados():
  lista = IndicadoresController.dadosDpoc()
  response = json.loads(lista)
  return response


if __name__ == "__main__":
  app.run(debug=True)