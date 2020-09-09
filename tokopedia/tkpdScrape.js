const puppeteer = require('puppeteer');
const { format } = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  let shopee_toko_official = 'https://developer.tokopedia.com/openapi/guide/#/errorcode';
    await page.goto(shopee_toko_official,{ waitUntil:'networkidle0', timeout: 0});

    let data = await page.evaluate(()=>{
      let errorDescriptions = [
          {
            Code:        "ORD_CACHE_001", 
            Description: "Order Not Found",
          },
          {
            Code:        "ORD_CACHE_002",
            Description: "Failed when retrieve order from cache",
          },
          {
            Code:        "ORD_CACHE_003",
            Description: "Invalid to Unmarshall Response",
          },
          {
            Code:        "ORD_USC_001",
            Description: "Order Status not eligible to accept",
          },
          {
            Code:        "ORD_USC_002",
            Description: "Order ID is not fulfillment",
          },
          {
            Code:        "ORD_USC_003",
            Description: "Order ID from warehouse id is not authenticate",
          },
          {
            Code:        "ORD_USC_004",
            Description: "Order ID need to be fulfilled by tokocabang",
          },
          {
            Code:        "ORD_USC_005",
            Description: "Order ID from shop id is not authenticate",
          },
          {
            Code:        "ORD_USC_006",
            Description: "Admin ID Not Found From Shop ID",
          },
          {
            Code:        "ORD_USC_007",
            Description: "Error When Request Accept Order To Ext Service",
          },
          {
            Code:        "ORD_USC_008",
            Description: "Order Status not eligible to reject",
          },
          {
            Code:        "ORD_USC_009",
            Description: "Mandatory To Fill Reason",
          },
          {
            Code:        "ORD_USC_010",
            Description: "Failed Getting Products",
          },
          {
            Code:        "ORD_USC_011",
            Description: "No Matching product id",
          },
          {
            Code:        "ORD_USC_012",
            Description: "Mandatory To Fill Shop Close End Date and Note",
          },
          {
            Code:        "ORD_USC_013",
            Description: "Shop Close End Date Present But Invalid",
          },
          {
            Code:        "ORD_USC_014",
            Description: "Error When Request Reject Order To Ext Service",
          },
          {
            Code:        "ORD_USC_015",
            Description: "FS ID Is Not Associated With Shop ID or Warehouse ID",
          },
          {
            Code:        "ORD_USC_016",
            Description: "Order ID Status Must Be 500 (In Shipping Process) to Update Into Set Delivered",
          },
          {
            Code:        "ORD_USC_017",
            Description: "Shop Not Found",
          },
          {
            Code:        "ORD_API_001",
            Description: "Failed To Initialize Request",
          },
          {
            Code:        "ORD_API_002",
            Description: "Failed To Generate Key",
          },
          {
            Code:        "ORD_API_003",
            Description: "Failed To Fetching Request",
          },
          {
            Code:        "ORD_API_004",
            Description: "Failed To Reading Response Body",
          },
          {
            Code:        "ORD_API_005",
            Description: "Failed To Parsing Json Response",
          },
          {
            Code:        "ORD_API_006",
            Description: "There Are Error From Ext Service",
          },
          {
            Code:        "ORD_API_007",
            Description: "Failed Marshalling JSON",
          },
          {
            Code:        "ORD_API_008",
            Description: "Data Not Found",
          },
          {
            Code:        "ORD_API_009",
            Description: "Error Data Order Too Big, Must Reduce Time Interval",
          },
          {
            Code:        "ORD_DLV_001",
            Description: "fs_id cannot be empty",
          },
          {
            Code:        "ORD_DLV_002",
            Description: "invalid fs_id format",
          },
          {
            Code:        "ORD_DLV_003",
            Description: "error order id and invoice no is empty.",
          },
          {
            Code:        "ORD_DLV_004",
            Description: "error must choose either order id or invoice no as parameter.",
          },
          {
            Code:        "ORD_DLV_005",
            Description: "invalid order_id format.",
          },
          {
            Code:        "ORD_DLV_006",
            Description: "invalid shop_id format",
          },
          {
            Code:        "ORD_DLV_007",
            Description: "invalid warehouse_id format",
          },
          {
            Code:        "ORD_DLV_008",
            Description: "please choose one between shop id or warehouse id",
          },
          {
            Code:        "ORD_DLV_009",
            Description: "from_date cannot be empty",
          },
          {
            Code:        "ORD_DLV_010",
            Description: "invalid from_date format",
          },
          {
            Code:        "ORD_DLV_011",
            Description: "to_date cannot be empty",
          },
          {
            Code:        "ORD_DLV_012",
            Description: "invalid to_date format",
          },
          {
            Code:        "ORD_DLV_013",
            Description: "Date Range must be less than %d days",
          },
          {
            Code:        "ORD_DLV_014",
            Description: "page cannot be empty",
          },
          {
            Code:        "ORD_DLV_015",
            Description: "invalid page format",
          },
          {
            Code:        "ORD_DLV_016",
            Description: "per_page cannot be empty",
          },
          {
            Code:        "ORD_DLV_017",
            Description: "invalid per_page format",
          },
          {
            Code:        "ORD_DLV_018",
            Description: "invalid status format",
          },
          {
            Code:        "ORD_DLV_019",
            Description: "failed read body request",
          },
          {
            Code:        "ORD_DLV_020",
            Description: "wrong json format",
          },
          {
            Code:        "ORD_DLV_021",
            Description: "shipping ref number cannot be empty for confirm shipping",
          },
          {
            Code:        "ORD_DLV_022",
            Description: "Shop ID cannot be empty for set delivered",
          },
          {
            Code:        "ORD_DLV_023",
            Description: "order status is not supported",
          },
          {
            Code:        "ORD_DLV_024",
            Description: "invalid first_order_id format",
          },
          {
            Code:        "ORD_DLV_025",
            Description: "invalid next_order_id format",
          },
          {
            Code:        "ORD_DLV_026",
            Description: "order_id cannot be empty",
          },
          {
            Code:        "PRD_API_001",
            Description: "Failed To Initialize Request",
          },
          {
            Code:        "PRD_API_002",
            Description: "Failed To Generate Key",
          },
          {
            Code:        "PRD_API_003",
            Description: "Failed Fetching Request",
          },
          {
            Code:        "PRD_API_004",
            Description: "Failed Reading Response Body",
          },
          {
            Code:        "PRD_API_005",
            Description: "Failed Parsing Json Response",
          },
          {
            Code:        "PRD_API_006",
            Description: "There Are Error From Ext Service",
          },
          {
            Code:        "PRD_API_007",
            Description: "Failed Marshalling JSON",
          },
          {
            Code:        "PRD_API_008",
            Description: "Data Not Found",
          },
          {
            Code:        "PRD_GRPC_001",
            Description: "Failed Send GRPC Request",
          },
          {
            Code:        "PRD_GRPC_002",
            Description: "There Are Error From Ext Service",
          },
          {
            Code:        "PRD_GRPC_003",
            Description: "Data Not Found",
          },
          {
            Code:        "PRD_GRPC_004",
            Description: "Failed Marshalling JSON",
          },
          {
            Code:        "PRD_GRPC_005",
            Description: "Failed Unmarshal JSON",
          },
          {
            Code:        "PRD_GRPC_006",
            Description: "Product Already Archived",
          },
          {
            Code:        "PRD_CACHE_001",
            Description: "Failed to retrieve new upload id",
          },
          {
            Code:        "PRD_CACHE_002",
            Description: "Failed Marshal Cache Key Value",
          },
          {
            Code:        "PRD_CACHE_003",
            Description: "Failed To Make Cache",
          },
          {
            Code:        "PRD_CACHE_004",
            Description: "Failed To Set Cache ExpireTime",
          },
          {
            Code:        "PRD_CACHE_005",
            Description: "Data Not Found",
          },
          {
            Code:        "PRD_CACHE_006",
            Description: "Failed to retrieve cache data",
          },
          {
            Code:        "PRD_CACHE_007",
            Description: "Failed Unrmashall cache response",
          },
          {
            Code:        "PRD_MQ_001",
            Description: "Failed to Marshal MQ Data",
          },
          {
            Code:        "PRD_MQ_002",
            Description: "Failed To Publish MQ",
          },
          {
            Code:        "PRD_DB_001",
            Description: "Failed To Query DB Data",
          },
          {
            Code:        "PRD_DB_002",
            Description: "Failed To Scan DB Data",
          },
          {
            Code:        "PRD_DB_003",
            Description: "Data Not Found",
          },
          {
            Code:        "PRD_DB_004",
            Description: "Failed To Begin TX",
          },
          {
            Code:        "PRD_DB_005",
            Description: "Error When Retrieve DB Row Data",
          },
          {
            Code:        "PRD_DB_006",
            Description: "Failed Marshal Data",
          },
          {
            Code:        "PRD_DB_007",
            Description: "Failed To Exec DML",
          },
          {
            Code:        "PRD_USC_001",
            Description: "fs_id Is Not Associated With Shop ID or Warehouse ID",
          },
          {
            Code:        "PRD_USC_002",
            Description: "Product ID Not Belong to Shop ID",
          },
          {
            Code:        "PRD_USC_003",
            Description: "Error when update product attribute to Ext Service",
          },
          {
            Code:        "PRD_USC_004",
            Description: "No Product URL Found",
          },
          {
            Code:        "PRD_USC_005",
            Description: "Upload ID is not associated with the supplied fs_id",
          },
          {
            Code:        "PRD_USC_006",
            Description: "Upload ID does not exist in our DB",
          },
          {
            Code:        "PRD_USC_007",
            Description: "Shop ID Is Not Found",
          },
          {
            Code:        "PRD_USC_008",
            Description: "Mandatory To Fill Warehouse ID",
          },
          {
            Code:        "PRD_USC_009",
            Description: "Warehouse is not owned by toko cabang",
          },
          {
            Code:        "PRD_USC_010",
            Description: "Warehouse is owned by toko cabang",
          },
          {
            Code:        "PRD_USC_011",
            Description: "Partner ID is not found",
          },
          {
            Code:        "PRD_USC_012",
            Description: "Shop ID Does Not Match",
          },
          {
            Code:        "PRD_USC_013",
            Description: "FS Type cannot use warehouse",
          },
          {
            Code:        "PRD_USC_014",
            Description: "Missing price on new inbound product",
          },
          {
            Code:        "PRD_USC_015",
            Description: "Failed Epoch converter today",
          },
          {
            Code:        "PRD_USC_016",
            Description: "Campaign Product Is Not Found",
          },
          {
            Code:        "PRD_USC_017",
            Description: "Failed Epoch converter start",
          },
          {
            Code:        "PRD_USC_018",
            Description: "Failed Epoch converter end",
          },
          {
            Code:        "PRD_USC_019",
            Description: "No Product Price Warehouse Data",
          },
          {
            Code:        "PRD_USC_020",
            Description: "Product not support for edit, status value must 1 or 3",
          },
          {
            Code:        "PRD_USC_021",
            Description: "Warehouse Data Not Found",
          },
          {
            Code:        "PRD_USC_022",
            Description: "Product Already Deleted",
          },
          {
            Code:        "PRD_USC_023",
            Description: "Error Unmarshal Product Status info struct",
          },
          {
            Code:        "PRD_USC_024",
            Description: "Error Convert number format into string",
          },
          {
            Code:        "PRD_USC_025",
            Description: "Shop ID is not associated with upload id",
          },
          {
            Code:        "PRD_DLV_001",
            Description: "fs_id cannot be empty",
          },
          {
            Code:        "PRD_DLV_002",
            Description: "invalid fs_id format",
          },
          {
            Code:        "PRD_DLV_003",
            Description: "invalid shop_id format",
          },
          {
            Code:        "PRD_DLV_004",
            Description: "parameter cannot be empty",
          },
          {
            Code:        "PRD_DLV_005",
            Description: "page cannot be empty when shop_id is filled",
          },
          {
            Code:        "PRD_DLV_006",
            Description: "invalid page format",
          },
          {
            Code:        "PRD_DLV_007",
            Description: "invalid sort format",
          },
          {
            Code:        "PRD_DLV_008",
            Description: "sort must between 1 to 10",
          },
          {
            Code:        "PRD_DLV_009",
            Description: "per_page cannot be empty when shop_id is filled",
          },
          {
            Code:        "PRD_DLV_010",
            Description: "invalid per_page format",
          },
          {
            Code:        "PRD_DLV_011",
            Description: "failed get max_page config",
          },
          {
            Code:        "PRD_DLV_012",
            Description: "products to show must between 1-%s items per page",
          },
          {
            Code:        "PRD_DLV_013",
            Description: "upload_id cannot be empty",
          },
          {
            Code:        "PRD_DLV_014",
            Description: "invalid upload_id format",
          },
          {
            Code:        "PRD_DLV_015",
            Description: "failed read body request",
          },
          {
            Code:        "PRD_DLV_016",
            Description: "shop_id cannot be empty",
          },
          {
            Code:        "PRD_DLV_017",
            Description: "product_id cannot be empty",
          },
          {
            Code:        "PRD_DLV_018",
            Description: "Max allowed products per-update are %d products",
          },
          {
            Code:        "PRD_DLV_019",
            Description: "invalid warehouse_id format",
          },
          {
            Code:        "PRD_DLV_020",
            Description: "Empty payload passed",
          },
          {
            Code:        "PRD_DLV_021",
            Description: "invalid product_id format",
          },
          {
            Code:        "PRD_DLV_022",
            Description: "rows cannot be empty",
          },
          {
            Code:        "PRD_DLV_023",
            Description: "invalid rows format",
          },
          {
            Code:        "PRD_DLV_024",
            Description: "rows must between %d - %d",
          },
          {
            Code:        "PRD_DLV_025",
            Description: "start cannot be empty",
          },
          {
            Code:        "PRD_DLV_026",
            Description: "invalid start format",
          },
          {
            Code:        "PRD_DLV_027",
            Description: "invalid order format",
          },
          {
            Code:        "PRD_DLV_028",
            Description: "order_by not valid",
          },
          {
            Code:        "PRD_DLV_029",
            Description: "invalid price_min format",
          },
          {
            Code:        "PRD_DLV_030",
            Description: "price_min must be between %d - %d",
          },
          {
            Code:        "PRD_DLV_031",
            Description: "invalid price_max format",
          },
          {
            Code:        "PRD_DLV_032",
            Description: "price_max must be between %d - %d",
          },
          {
            Code:        "PRD_DLV_033",
            Description: "invalid preorder format",
          },
          {
            Code:        "PRD_DLV_034",
            Description: "invalid free_return format",
          },
          {
            Code:        "PRD_DLV_035",
            Description: "invalid wholesale format",
          },
          {
            Code:        "PRD_DLV_036",
            Description: "wrong json format",
          },
          {
            Code:        "PRD_DLV_037",
            Description: "Maximun products allowed are %d",
          },
          {
            Code:        "PRD_DLV_038",
            Description: "Value [%s] of field [%s] is not allowed, the allowed fields are %s",
          },
          {
            Code:        "PRD_DLV_039",
            Description: "Value of field [%s] exceed limit %s=%d",
          },
          {
            Code:        "PRD_DLV_040",
            Description: "stock cannot be empty",
          },
          {
            Code:        "PRD_DLV_041",
            Description: "Field [%s] contains duplicate value",
          },
          {
            Code:        "PRD_DLV_042",
            Description: "Invalid field [%s] format, value [%v] should be %s",
          },
          {
            Code:        "PRD_DLV_043",
            Description: "Invalid request body, please check again",
          },
          {
            Code:        "PRD_DLV_044",
            Description: "Value [%d] of field [%s] should be %s than value [%d] of field [%s]",
          },
          {
            Code:        "PRD_DLV_045",
            Description: "Field [%s] should not be empty, please fill the empty field",
          },
          {
            Code:        "PRD_DLV_046",
            Description: "Failed Delete Product",
          },
          {
            Code:        "PRD_DLV_047",
            Description: "Value [%v] of field [%s] is not available anymore",
          },
          {
            Code:        "GDS_GRPC_001",
            Description: "Failed Send GRPC Request",
          },
          {
            Code:        "GDS_GRPC_002",
            Description: "There Are Error From Ext Service",
          },
          {
            Code:        "GDS_GRPC_003",
            Description: "Data Not Found",
          },
          {
            Code:        "GDS_GRPC_004",
            Description: "Failed Marshalling JSON",
          },
          {
            Code:        "GDS_GRPC_005",
            Description: "Failed Unmarshal JSON",
          },
          {
            Code:        "CMP_GRPC_001",
            Description: "Failed Send GRPC Request",
          },
          {
            Code:        "CMP_GRPC_002",
            Description: "There Are Error From Ext Service",
          },
          {
            Code:        "CMP_GRPC_003",
            Description: "Data Not Found",
          },
          {
            Code:        "CMP_GRPC_004",
            Description: "Failed Marshalling JSON",
          },
          {
            Code:        "CMP_GRPC_005",
            Description: "Failed Unmarshal JSON",
          },
          {
            Code:        "CMP_USC_001",
            Description: "fs_id Is Not Associated With Shop ID or Warehouse ID",
          },
          {
            Code:        "CMP_USC_002",
            Description: "Some Product ID Is Not Own By Current Shop ID",
          },
          {
            Code:        "CMP_USC_003",
            Description: "Invalid Product ID Format",
          },
          {
            Code:        "CMP_DLV_001",
            Description: "Invalid field [%s] format, value [%v] should be %s",
          },
          {
            Code:        "CMP_DLV_002",
            Description: "Product IDs must be numeric and comma separated",
          },
          {
            Code:        "CMP_DLV_003",
            Description: "Value of field [%s] exceed limit %s=%d",
          },
          {
            Code:        "CMP_DLV_004",
            Description: "product_id cannot be empty",
          },
          {
            Code:        "SPE_API_001",
            Description: "Failed To Initialize Request",
          },
          {
            Code:        "SPE_API_002",
            Description: "Failed To Generate Key",
          },
          {
            Code:        "SPE_API_003",
            Description: "Failed To Fetching Request",
          },
          {
            Code:        "SPE_API_004",
            Description: "Failed To Reading Response Body",
          },
          {
            Code:        "SPE_API_005",
            Description: "Failed To Parsing Json Response",
          },
          {
            Code:        "SPE_API_006",
            Description: "There Are Error From Ext Service",
          },
          {
            Code:        "SPE_API_007",
            Description: "Failed Marshalling JSON",
          },
          {
            Code:        "SPE_API_008",
            Description: "Data Not Found",
          },
          {
            Code:        "SPE_USC_001",
            Description: "fs_id Is Not Associated With Shop ID or Warehouse ID",
          },
          {
            Code:        "SPE_USC_002",
            Description: "Product ID does not belong to Shop ID",
          },
          {
            Code:        "SPE_DLV_001",
            Description: "fs_id cannot be empty",
          },
          {
            Code:        "SPE_DLV_002",
            Description: "invalid fs_id format",
          },
          {
            Code:        "SPE_DLV_003",
            Description: "invalid shop_id format",
          },
          {
            Code:        "SPE_DLV_004",
            Description: "shop_id cannot be empty",
          },
          {
            Code:        "SPE_DLV_005",
            Description: "Invalid field [%s] format, value [%v] should be %s",
          },
          {
            Code:        "SPE_DLV_006",
            Description: "Invalid request body, please check again",
          },
          {
            Code:        "SPE_DLV_007",
            Description: "Value of field [%s] exceed limit %s=%d",
          },
          {
            Code:        "SPE_DLV_008",
            Description: "Value [%s] of field [%s] is not allowed, the allowed fields are %s",
          },
          {
            Code:        "LGS_USC_001",
            Description: "Order ID is not fulfillment",
          },
          {
            Code:        "LGS_USC_002",
            Description: "Order ID from warehouse id is not authenticate",
          },
          {
            Code:        "LGS_USC_003",
            Description: "Order ID need to be fulfilled by tokocabang",
          },
          {
            Code:        "LGS_USC_004",
            Description: "fs_id Is Not Associated With Shop ID or Warehouse ID",
          },
          {
            Code:        "LGS_USC_005",
            Description: "Admin ID Not Found From Shop ID",
          },
          {
            Code:        "LGS_USC_006",
            Description: "Error When Request Confirm Shipping To Ext Service",
          },
          {
            Code:        "LGS_USC_007",
            Description: "Error When Request Pickup To Ext Service",
          },
          {
            Code:        "LGS_USC_008",
            Description: "Order ID is not fulfillment",
          },
          {
            Code:        "LGS_USC_009",
            Description: "Order ID from warehouse id is not authenticate",
          },
          {
            Code:        "LGS_USC_010",
            Description: "Order ID from shop id is not authenticate",
          },
          {
            Code:        "LGS_API_001",
            Description: "Failed Initialize Request",
          },
          {
            Code:        "LGS_API_002",
            Description: "Failed Generate Key",
          },
          {
            Code:        "LGS_API_003",
            Description: "Failed Fetching Request",
          },
          {
            Code:        "LGS_API_004",
            Description: "Failed To Read Response Body",
          },
          {
            Code:        "LGS_API_005",
            Description: "Failed Parsing Json Response",
          },
          {
            Code:        "LGS_DLV_001",
            Description: "fs_id cannot be empty",
          },
          {
            Code:        "LGS_DLV_002",
            Description: "invalid fs_id format",
          },
          {
            Code:        "LGS_DLV_003",
            Description: "wrong json format",
          },
          {
            Code:        "LGS_DLV_004",
            Description: "order_id is required in request body",
          },
          {
            Code:        "LGS_DLV_005",
            Description: "order id cannot be empty",
          },
          {
            Code:        "LGS_DLV_006",
            Description: "invalid order id format",
          },
        ]

        let size = document.querySelectorAll('.table-wrapper table tbody tr').length;
        let results = [];
        for(i = 0 ; i < size; i++){
            results.push({
                Code : document.querySelectorAll('code')[i].textContent,
                Description : document.querySelectorAll('td:nth-child(2)')[i].textContent
            });
        }

        let hasil = [];
        for(let i = 0; i < results.length; i++){
          for(let j = 0; j < errorDescriptions.length; j++){
            if(results[i] == errorDescriptions[j]){
              hasil.push(errorDescriptions[j]) 
            } else {
              return 0; 
            }
          }
          return hasil; 
        }   
    }); 

  await browser.close();

  console.log(data);
  return data;
})();
