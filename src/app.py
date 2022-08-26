from flask import Flask
from flask import render_template
from controllers import IndicadoresController
import json

app = Flask(__name__)

@app.route("/")
def index():
  return render_template("index.html")

@app.route("/dados")
def dados():
  lista = IndicadoresController.dadosDpoc()
  response = json.loads(lista)
  for chave in response[0]:
    return f"chave = {chave}"


if __name__ == "__main__":
  app.run(debug=True)