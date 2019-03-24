from bs4 import BeautifulSoup
import json
import requests
output = []

# Uncomment below to scrape all student group names

# start_url = "https://www.ulife.utoronto.ca/interests/list/type/justice/page/"
#
# for i in range(10):
#     url = start_url + str(i+1)
#     res = requests.get(url)
#     html = BeautifulSoup(res.text, 'lxml')
#     listings = html.select(".listing.innerListing li")
#     for li in listings:
#         dict = {}
#         dict["name"] = li.select("a")[0].string
#         dict["description"] = list(li.children)[2].strip()
#         output.append(dict)
#
# with open('club-data.json', 'w') as file:
#     json.dump(output, file)

# -------------------------------
# Uncomment below to scrape list of categories

categories = []

url = "https://www.ulife.utoronto.ca/interests/list/type/justice/page/"

res = requests.get(url)
html = BeautifulSoup(res.text, 'lxml')
menu_item = html.select(".default-blue .btmLvlNav li a span")
for item in menu_item:
    categories.append(item.string)

with open('categories.json', 'w') as file:
    json.dump(categories, file)
