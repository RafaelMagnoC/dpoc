import folium
import shutil

class Map:
  def __init__(self):
    self.center = [-15.770, -47.92950]
    self.zoom_start = 4

  def createMap(self):
    #Create the map
    my_map = folium.Map(
      location = self.center,
      zoom_start = self.zoom_start
    )
    #Save map
    my_map.save("map.html")
    #Insertion icon
    folium.Marker(
      location=[45.3288, -121.6625],
      popup="Mt. Hood Meadows",
      icon=folium.Icon(icon="cloud"),
      ).add_to(my_map)

  def moveFileMap(self):  
    shutil.move(
      r"C:\Users\CISSO-3\Desktop\dpoc\map.html",
      r"C:\Users\CISSO-3\Desktop\dpoc\src\static\assets\map.html"
    )  
mapaBrasil = Map()
mapaBrasil.createMap()
mapaBrasil.moveFileMap()


