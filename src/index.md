---
layout: layouts/general.njk
title: Welcome to Saiticon Official Website!
description: Humans and robots live peacefully together here.
---

Saiticon is located on the continent of Australia. It has a population of over one million and is a developed country. It has also managed to build a country of great wealth. 

The currency is SaiCon (SC). 1SC is equal to 1000IDR.

Saiticon has a good economic status, abundant natural wealth and various tourist attractions such as beaches, mountains, museums and forests.

Saiticon cooperates with other countries such as the United States, China, Japan, and Indonesia to build a better world.

Saiticon country will become a successful country and the richest country in the eyes of the world in 2050.

## News

Our citizens write about their experiences and what happens at Saiticon.

<ul class="news">{% include "news/list.njk" %}</ul>

## Profiles

Here are {{ collections.citizen.length }} profiles of citizens at Saiticon.

{% include "citizen/list.njk" %}
