console.log(`start`)
const puppeteer = require('puppeteer')

amazon_test = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.amazon.co.jp/')
  // await page.focus("input#twotabsearchtextbox");
  // await page.$("input#twotabsearchtextbox").then((element) => {console.log(element);});
  await page.type('#twotabsearchtextbox', 'Nature Remo mini')
  await page.click('input[type="submit"][value="検索"]')
  await page.waitForNavigation({waitUntil:"networkidle0"})

  await page.screenshot({path: 'example.png'})
  await browser.close()
};



sitemap_test = async () => {
  const browser = await puppeteer.launch()
  const page = await browser.newPage()
  await page.goto('https://www.aeonpet-memorial.com/sitemap.xml')
  let elements = await page.$$('url')
  // properties = await elements[0].getProperties()
  console.log("aaaa")
  for(element of elements){
    let data = await element.$eval('loc', item => {
        return item.textContent;
    });
    console.log(data)
  }

  console.log(`complete:${elements.length}`)
  await browser.close()
}

sitemap_test()











