---
layout: post
title: "Beer Color Calculation"
date: 2015-01-31 15:01:30 -0500
comments: true
categories: 
---

## Degrees Lovibond

Most Malts come with a rating of Lovibond. Lovibond (aka degrees lovibond or just L) is a color scale  introduced by Joseph Lovibond in the '60s. 
Usually a "Tintometer" is used, which is just a set of tinted slides, and much like going to optometrist, you get answer "1 or 2" until you get the closest matching tint.
While this method has been applied to many substances, the brewing industry remains a prolific user of it today.

To get a feel for this scale, a lager would be a `2`, while a stout would show as a `40` (although anything above 25 is just black). In most cases, the L associated with a grain comes from a batch of wort prepared with that grain.


## Malt Color Units

`MCU`s are used as a method of finding the contribution of each part of a recipe to the color as a whole.
For the weight of grain in lbs ($$W_{lbs}$$), and volume in gallons, $$V_{gal}$$.

$$MCU = (W_{lbs}) * (L) / (V_{gal})$$

Simply add the MCU of each part to get the total MCU. Since the volume is the same for each (for instance, if you had a 6 gallon batch, use 6 gallons for the volume variable), this resembles an average color rating.

## Standard Reference Method

SRM is the newly adapted model for color estimation. Although SRM and L are very close, they tend to diverge around 6-8 (roughly golden brown/copper). So, the Morey equation provides a good estimate of the SRM based on MCU.

$$ SRM=1.4922\times (MCU^{0.6859}) $$


So, based on the ingredients (subscript $$ i$$), you can estimate the color output

$$ SRM=1.4922\times \left[\left(\sum_i (W_{lbs})_i * (L)_i / (V_{gal}) \right)^{0.6859}\right]  $$


[Eddie's Ale House](http://eddiesalehouse.com/images/eddie-s-alehouse-beer-infographic-srm.jpg) has a fantastic chart for comparing SRM colors for beers.

