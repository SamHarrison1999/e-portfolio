"""Init File"""
from Cocomo import Cocomo

table = [[2.4, 1.05, 2.5, 0.38],
         [3.0, 1.12, 2.5, 0.35],
         [3.6, 1.20, 2.5, 0.32]]
size = 4
Cocomo.calculate(table, size)
