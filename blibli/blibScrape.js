const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  let blib_toko_official = 'https://seller-api.blibli.com/docs/sections/68/contents/2905?title=error-codes';
    await page.goto(blib_toko_official,{ waitUntil:'networkidle0', timeout: 0});

    let data = await page.evaluate(()=>{
        let size = document.querySelectorAll(".content-body p").length;
        let results = [];
        for(i = 0 ; i < size; i++){
            results.push({
                Code : document.querySelectorAll('strong:nth-child(1)')[i].textContent,
                //Desc : document.querySelectorAll('strong:nth-child(2)')[i].innerHTML
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
