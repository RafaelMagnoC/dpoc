import json
import pandas as pd

def dadosDpoc():
  pathFile = r"C:\Users\CISSO-3\Desktop\dpoc\src\database\dados_dpoc.xlsx"
  dbDpoc = pd.read_excel(
    pathFile,
    engine="openpyxl"
  )
  return dbDpoc[['cid','cliente', 'genero', 'municipio', 'uf']].to_json(orient="records")




