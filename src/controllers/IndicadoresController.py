import pandas as pd

dbDpoc = pd.read_excel(r"C:\Users\CISSO-3\Desktop\dpoc\src\database\dados_dpoc.xlsx", engine="openpyxl")



print(idade)

class Dpoc:
  def __init__(self, cliente, genero, municipio, estado, idade):
    self.cliente = dbDpoc["cliente"]
    self.genero = dbDpoc["sexo"]
    self.municipio = dbDpoc["municipio"]
    self.estado = dbDpoc["uf"]
    self.idade = dbDpoc["Idade"]