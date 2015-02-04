---
layout: post
title: "Grain Mass Calculations"
date: 2015-01-31 19:13:11 -0500
comments: true
categories: Beer Brewing Grain Mass
---
## Goal

Alright, so, you've assembled your recipes in terms of grains and percents. Now, you want to figure out how much of your grain recipe you want to add to the mash.

The first chemical conversion in brewing, saccarification, is one of the most important step in determining the alcohol content of the beer.

Sucrose, one of the most common sugars produced in saccarification is strongly correlated with increase in specific gravity of beers due to highest increase in SG for percent weight in solution.

The amount of sucrose in solution is measured in degrees Plato. Plato is defined as the number of grams of sugar per 100 grams of solution.  Plato is used widely in Europe and is based on corrections to the older Balling scale. Balling and Plato are close but not exactly equivalent due to differences in calibration temperature.  The difference between the two is about 0.05% weight/weight, however, so in most practical situations Plato is equivalent to Balling.

## Specific Gravity

S.G. is the density of a liquid or solid compared to that of water. This is related to Plato in the following formula.

$$S.G.  = 1+\frac{^\circ Plato}{258.6- ^\circ Plato/258.2\times 227.1}$$

Most beers have a starting specific gravity of 1.025-1.100.

##Weight of Extract

The weight of extract is the amount of malt extract present in the wort. The amount of extract is related to specific gravity in the following formula:

$$ Lbs\;extract =   (8.32 lbs/gal wort)(gal wort)(S.G.)/ 100 $$

8.32 in the above formula is the weight of one gallon of water. To find the weight of a gallon of wort, multiply the specific gravity of the wort by 8.32lbs. 
 

## Brew House Yield (BHY)

Brew house yield is a measurement that tells the efficiency of the brewing.	The actual degrees Plato from the brew and the actual gallons collected out of the kettle are needed to calculate the BHY. 

$$ BHY  =  [(^\circ P_{actual})(gal_{actual})(BHY_{target})] / [(^\circ P_{target})(gal_{target})]		$$ 

##Working Yield

Working Yield is the product of the Hot Water Extract multiplied by the Brew House Yield.  This product will provide the percent of extract collected from the malt. 

$$ WY =    (HWE as-is)(BHY)	$$

##Pounds of Malt

It is imperative that you measure your recipes by the percent of extract taken from the malt rather than the weight of the malt. 
 Do this will all you to compensate for the Working Yield and help you accurately measure your malt bills.  
 For example, an recipe may call for 5\% of caramel 20.  
 This does not me that you ad 0.5 lbs of caramel 20 malt in a 10 lb recipe. Instead, this means that you will have 5\% of the total extract come from the caramel 20 malt.  
 Use the following formula to calculate the weight of malt based on a percent of extract.

$$ Lbs malt = (Lbs extract)(\% Extract) / WY$$

##Strike Water Temp

As you know when you are mashing, your strike water has to be warmer than the target mash temperature because the cool malt will cool the temperature of the water.  
To correctly calculate the temperature of the strike water, use the following formula.

$$ Strike Temp =  [((0.4)(T mash-T malt)) / L:G] +  T mash $$

##Mash Water Volume

To calculate the mash water volume you will need to know your liquor to grist ratio.  
The term liquor refers to the mash water and grist refers to the milled malt.  
We need to calculate the appropriate amount of water to allow for enzyme action and starch conversion take place.

$$ gallons H2O =  (Lbs malt)(L:G)(1gallon H2O) / 8.32 lbs water 		$$
 

## Weight of Hops
IBUs or International Bittering Units measures a bitterness unit for hops.  
IBUs are the measurement in parts per million (ppm) of iso-alpha acids in the beer.   
For example, an IPA with 75 IBUs has 75 milligrams of isomerized alpha acids per liter. 
The equation used to calculate the weight of hops for the boil is as follows.

$$Ounces hops = (IBU_{Target})(galbeer)(IBU\%) / (\%\alpha-acid)(\% Utilization)(7494)	$$

The IBU target equals the total bitterness for the beer.  (e.g. an IPA may have an IBU target of 75 IBUs).
The percent IBU is equal to the percent of IBUs from each hop addition.  
You may wish for your first hop addition to contribute 95\% of the total IBUs.  
This would make your IBU\% 95\% .  
The \% $\alpha$-acid is the amount of alpha acid in the hops and can be found on the hop packaging.  
The \% Utilization is a measurement of the percentage of alpha acid units that will isomerize in the boil.  
The following chart outlines the typical utilizations and hop boil times.

* $60 min = 30\% utilization$
* $30 min = 15\% $
* $5   min = 2.5\% $

		
The 7494 is a conversion factor and used to cancel the units in the equation. 
For the hops equation, the units for the \% must be expressed in decimal form.  (e.g. 10\%= .10)
 
## Calculation of Wort and Beer Color

$$ Color of Wort = S [(\% extract)(^\circ L of malt)(^\circ P wort / 8^\circ P reference)]		$$


We allow for a 30\% loss of color during fermentation to calculate the color of beer.
Color of Beer = (color of wort)(1 - \% color loss)

