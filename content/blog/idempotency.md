+++
title = "was bedeutet \"Idempotent\"?"
date = 2025-06-15
+++

Idempotent beschreibt eine Aktion die man mehrmals ausführen kann ohne dass sich das Ergebnis ändert.

Wir haben hier in Berlin zum Beispiel eine idempotente Fußgängerampel:

Drückt man auf den Knopf, muss man 20 Sekunden warten, dann wird sie grün.
Wenn ich schon 18 Sekunden gewartet habe und es kommt jemand der ebenfalls über die Straße will und auf den Knopf drückt, wird der Wartemechanismus nicht neu gestartet, sondern es bleibt bei der schon angebrochenen Wartezeit.

Meine Großmutter sagt, dass man ein Gummibärchen, wenn man einmal draufgetreten ist, nicht mehr essen darf.
Das heißt aber nicht, dass man wieder essen kann, wenn man noch einmal drauftritt. Mehrmaliges drauftreten ändert nichts an der Essbarkeit des Gummibärchens.

Gummibärchen sind in dieser Hinsicht idempotent, sagt meine Großmutter.


