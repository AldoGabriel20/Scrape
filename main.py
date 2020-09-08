import sys
from job.tasks import scrape_tokopedia, scrape_shopee
# from celery import app

if sys.argv[1] == "tokpedErrorMapper":
    scrape_tokpedErrorMapper.apply_async(())
elif sys.argv[1] == "blibliErrorMapper":
    scrape_blibliErrorMapper.apply_async(())
else:
    print("Unrecognized argument, system end")
