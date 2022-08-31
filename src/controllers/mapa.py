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
    #Insertion icon
    folium.Marker(
      location=[-15.770, -47.92950],
      popup="<i>Mt. Hood Meadows</i>",
      icon=folium.Icon(color = "red", icon="info-sign"),
      ).add_to(my_map)

    #Save map
    my_map.save("map.html")

  def moveFileMap(self):  
    shutil.move(
      r"C:\Users\CISSO-3\Desktop\dpoc\map.html",
      r"C:\Users\CISSO-3\Desktop\dpoc\src\static\assets\map.html"
    )  



