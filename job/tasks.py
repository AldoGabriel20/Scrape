from __future__ import absolute_import, unicode_literals\

from subprocess import call
from .celery import app

@app.task
def scrape_tokpedErrorMapper():
    call(["node", "./tokopedia/tkpdScrape.js"])
    return 1

@app.task
def scrape_blibliErrorMapper():
    call(["node", "./blibli/blibScrape.js"])
    return 1

# chain(add.s(2, 2), add.s(4), add.s(8))().get()
# group(add.s(i, i) for i in range(10))().get()
