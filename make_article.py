#!/usr/bin/python


import sys
from  datetime import date


dt = date.today()
category = sys.argv[1]
title = sys.argv[2]
file_title=title.replace(" ","_")

directory = "content/"+category+"/"+str(dt)+"-"+file_title+".markdown"

print "Making new file at: "+directory
output = open(directory, 'w')


output.write("Title: "+title+"\n")
output.write("Date: "+str(dt)+"\n" )
output.write("Categories: "+category+"\n")
