const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  let shopee_toko_official = 'https://developer.tokopedia.com/openapi/guide/#/errorcode';
    await page.goto(shopee_toko_official,{ waitUntil:'networkidle0', timeout: 0});

    let data = await page.evaluate(()=>{
        let size = document.querySelectorAll(".table-wrapper table tbody tr").length;
        let results = [];
        for(i = 0 ; i < size; i++){
            results.push({
                Code : document.querySelectorAll('code')[i].textContent,
                Desc : document.querySelectorAll('td:nth-child(2)')[i].textContent
            });
        }
        
        return{
            results
        }
    }); 

  await browser.close();

  console.log(data);
  return data;
})();
