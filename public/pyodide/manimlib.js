var Module=typeof pyodide._module!=="undefined"?pyodide._module:{};Module.checkABI(1);if(!Module.expectedDataFileDownloads){Module.expectedDataFileDownloads=0;Module.finishedDataFileDownloads=0}Module.expectedDataFileDownloads++;(function(){var loadPackage=function(metadata){var PACKAGE_PATH;if(typeof window==="object"){PACKAGE_PATH=window["encodeURIComponent"](window.location.pathname.toString().substring(0,window.location.pathname.toString().lastIndexOf("/"))+"/")}else if(typeof location!=="undefined"){PACKAGE_PATH=encodeURIComponent(location.pathname.toString().substring(0,location.pathname.toString().lastIndexOf("/"))+"/")}else{throw"using preloaded data can only be done on a web page or in a web worker"}var PACKAGE_NAME="manimlib.data";var REMOTE_PACKAGE_BASE="manimlib.data";if(typeof Module["locateFilePackage"]==="function"&&!Module["locateFile"]){Module["locateFile"]=Module["locateFilePackage"];err("warning: you defined Module.locateFilePackage, that has been renamed to Module.locateFile (using your locateFilePackage for now)")}var REMOTE_PACKAGE_NAME=Module["locateFile"]?Module["locateFile"](REMOTE_PACKAGE_BASE,""):REMOTE_PACKAGE_BASE;var REMOTE_PACKAGE_SIZE=metadata.remote_package_size;var PACKAGE_UUID=metadata.package_uuid;function fetchRemotePackage(packageName,packageSize,callback,errback){var xhr=new XMLHttpRequest;xhr.open("GET",packageName,true);xhr.responseType="arraybuffer";xhr.onprogress=function(event){var url=packageName;var size=packageSize;if(event.total)size=event.total;if(event.loaded){if(!xhr.addedTotal){xhr.addedTotal=true;if(!Module.dataFileDownloads)Module.dataFileDownloads={};Module.dataFileDownloads[url]={loaded:event.loaded,total:size}}else{Module.dataFileDownloads[url].loaded=event.loaded}var total=0;var loaded=0;var num=0;for(var download in Module.dataFileDownloads){var data=Module.dataFileDownloads[download];total+=data.total;loaded+=data.loaded;num++}total=Math.ceil(total*Module.expectedDataFileDownloads/num);if(Module["setStatus"])Module["setStatus"]("Downloading data... ("+loaded+"/"+total+")")}else if(!Module.dataFileDownloads){if(Module["setStatus"])Module["setStatus"]("Downloading data...")}};xhr.onerror=function(event){throw new Error("NetworkError for: "+packageName)};xhr.onload=function(event){if(xhr.status==200||xhr.status==304||xhr.status==206||xhr.status==0&&xhr.response){var packageData=xhr.response;callback(packageData)}else{throw new Error(xhr.statusText+" : "+xhr.responseURL)}};xhr.send(null)}function handleError(error){console.error("package error:",error)}var fetchedCallback=null;var fetched=Module["getPreloadedPackage"]?Module["getPreloadedPackage"](REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE):null;if(!fetched)fetchRemotePackage(REMOTE_PACKAGE_NAME,REMOTE_PACKAGE_SIZE,function(data){if(fetchedCallback){fetchedCallback(data);fetchedCallback=null}else{fetched=data}},handleError);function runWithFS(){function assert(check,msg){if(!check)throw msg+(new Error).stack}Module["FS_createPath"]("/","lib",true,true);Module["FS_createPath"]("/lib","python3.7",true,true);Module["FS_createPath"]("/lib/python3.7","site-packages",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib-0.1.11.dev212-py3.7.egg-info",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages","manimlib",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","web",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/web","tex_points",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","scene",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","files",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","animation",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","utils",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","mobject",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","types",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib/mobject","svg",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","camera",true,true);Module["FS_createPath"]("/lib/python3.7/site-packages/manimlib","container",true,true);Module["FS_createPath"]("/","bin",true,true);function DataRequest(start,end,audio){this.start=start;this.end=end;this.audio=audio}DataRequest.prototype={requests:{},open:function(mode,name){this.name=name;this.requests[name]=this;Module["addRunDependency"]("fp "+this.name)},send:function(){},onload:function(){var byteArray=this.byteArray.subarray(this.start,this.end);this.finish(byteArray)},finish:function(byteArray){var that=this;Module["FS_createPreloadedFile"](this.name,null,byteArray,true,true,function(){Module["removeRunDependency"]("fp "+that.name)},function(){if(that.audio){Module["removeRunDependency"]("fp "+that.name)}else{err("Preloading file "+that.name+" failed")}},false,true);this.requests[this.name]=null}};function processPackageData(arrayBuffer){Module.finishedDataFileDownloads++;assert(arrayBuffer,"Loading data file failed.");assert(arrayBuffer instanceof ArrayBuffer,"bad input to processPackageData");var byteArray=new Uint8Array(arrayBuffer);var curr;var compressedData={data:null,cachedOffset:1056269,cachedIndexes:[-1,-1],cachedChunks:[null,null],offsets:[0,956,1843,3154,4382,5709,7142,8591,9630,10767,11952,13355,14530,15814,16486,17402,18555,19641,20756,21954,22701,24e3,25197,26298,27468,28667,29770,30755,31873,32842,33796,34899,35687,36816,37831,39035,40066,41215,42274,43236,44359,45420,46500,47558,48671,49694,50805,51895,52946,53752,54865,56015,57104,58334,59378,60559,61648,62769,63890,64973,66004,67104,68198,69365,70437,71582,72744,73811,74928,75916,77081,78291,79332,80536,81679,82701,83861,84805,85968,86975,87844,88846,89829,90759,91937,92985,94265,95259,96350,97308,98333,99429,100525,101644,102619,103771,104871,106022,106907,108150,109171,110034,111066,112217,113305,114505,115682,116613,117888,118957,120050,121156,122214,123178,124141,125177,125936,127040,128157,129288,130354,131401,132632,133808,134914,136082,137180,138266,139330,140343,141435,142618,143678,144723,145658,146755,147832,148707,149784,150744,151728,152762,153615,154654,155718,156930,158029,158963,160018,161085,162086,163081,164202,165207,166339,167387,168525,169595,170491,171384,172290,173230,174153,175118,175974,176921,177978,178833,179899,180864,181827,182842,184008,185087,186135,187228,188043,189138,190013,191055,192084,192928,193981,194967,195955,197127,198209,199251,200501,201652,202548,203680,204653,205702,206744,207913,208998,210018,211056,212085,213150,214062,215070,215999,217002,217916,218955,219854,220921,221947,222907,223975,224808,225708,226688,227686,228683,229520,230434,231497,232341,233386,234444,235363,236358,237316,238359,239391,240298,241351,242354,243499,244694,245642,246789,247742,248788,249807,250756,251591,252545,253615,254574,255547,256563,257630,258723,259766,260606,261604,262693,263702,264690,265752,266608,267726,268825,269780,270688,271792,272642,273588,274734,275742,276771,277752,278810,279900,280849,281888,282870,283884,284948,285941,287160,288254,289360,290387,291382,292550,293602,294334,295322,296316,297452,298544,299281,300236,301232,302319,303225,304089,305e3,306096,307176,308292,309205,310313,311419,312419,313426,314352,315228,316326,317270,318480,319363,320380,321288,322322,323418,324223,325369,326247,327400,328396,329432,330461,331631,332693,333754,334784,335889,336857,337902,339029,340009,340866,341725,342686,343750,344672,345735,346730,347830,348860,349750,350755,351725,352701,353602,354487,355488,356583,357496,358522,359456,360409,361211,362202,363262,364450,365503,366470,367609,368615,369509,370433,371513,372618,373772,374682,375816,376788,377944,379081,379985,381137,382103,383073,384170,385077,386138,387204,388478,389679,390562,391655,392654,393679,394616,395695,396768,397666,398771,399835,400840,401876,402888,403845,405045,406185,407260,408377,409364,410329,411283,412415,413427,414379,415421,416509,417510,418478,419351,420567,421490,422559,423381,424312,425119,426200,427218,428039,429145,429977,430970,431972,433143,434236,435254,436320,437183,438257,439106,440164,441235,442092,443183,444207,445244,446416,447503,448502,449724,450894,451818,452922,453950,454968,455927,457133,458257,459334,460554,461435,462393,463284,464412,465376,466397,467398,468310,469305,470499,471612,472705,473810,474723,475858,476903,477917,478939,479899,481145,482086,483170,484265,485191,486219,487216,488228,489240,490181,491242,492226,493325,494395,495342,496157,497087,498197,499453,500738,501720,502761,503682,504713,505743,506692,507618,508541,509486,510332,511326,512447,513363,514428,515365,516300,517105,518071,519142,520336,521397,522380,523508,524565,525440,526380,527396,528480,529660,530600,531704,532768,533797,534742,535956,537094,538173,539327,540394,541503,542625,543680,544704,545818,546812,547882,548989,549961,550825,551703,552679,553760,554744,555850,556845,557831,558794,559740,560784,561874,562921,564110,565120,566172,567211,568325,569281,570353,571367,572414,573320,574317,575202,576231,577316,578110,579235,580085,580950,581833,582946,583991,585172,586138,587213,588295,589286,590103,591033,592139,593318,594486,595440,596601,597589,598609,599656,600873,601992,603036,604282,605466,606388,607549,608586,609575,610646,611573,612662,613703,614979,616168,616986,618111,618916,620039,620986,622127,623179,624199,625136,625994,627144,628111,629174,630259,631395,632192,633391,634295,635171,636169,637273,638191,639263,640200,641146,642088,643244,644366,645405,646567,647416,648424,649393,650381,651570,652642,653681,654715,655657,656766,657861,658806,659921,660730,661605,662539,663624,664548,665569,666709,667942,669172,670078,671156,672117,673168,674106,675061,676033,677209,678330,679416,680544,681398,682433,683349,684233,685338,686378,687338,688400,689320,690443,691514,692489,693515,694454,695674,696602,697662,698803,699787,700737,701651,702624,703451,704446,705571,706494,707600,708543,709496,710291,711285,712347,713527,714541,715543,716699,717707,718580,719491,720546,721640,722816,723777,724906,725957,726994,727985,729200,730310,731375,732549,733773,734735,735853,736970,738018,739002,740008,740955,742082,743365,744590,745491,746579,747538,748583,749544,750652,751674,752626,753733,754776,755798,756975,757953,758939,759900,760841,761719,762702,763832,764763,765827,766778,767734,768552,769531,770621,771803,772837,773845,774950,775978,776814,777745,778771,779865,781002,781925,783055,784077,785127,786087,787269,788364,789425,790600,791858,792854,793918,795094,796122,797027,798179,799126,800165,801414,802702,803725,804723,805700,806687,807757,808742,809856,810808,811928,812780,813753,814892,815871,816896,817905,819158,820019,821216,822139,823095,824101,825136,825977,827023,828095,829289,830279,831383,832346,833457,834434,835526,836508,837653,838705,839724,840681,841768,842818,843694,844640,845808,846800,847815,848744,849792,850707,851724,852690,853701,854934,855852,856916,858048,859149,860192,861105,862118,863061,864168,865178,866442,867793,868929,869961,871061,872057,872746,873717,874736,875785,876930,877967,879064,880161,881171,882331,883358,884481,885679,886884,887934,888984,890139,891054,892195,893362,894801,896131,897457,898674,899927,901158,902459,903459,904709,905869,907081,908317,909645,910895,912242,913328,914381,915412,916563,917690,918676,919758,920791,922043,923076,924096,925249,926348,927495,928543,929734,930824,931832,933017,934211,935301,936464,937657,938705,939838,940703,941793,942825,944044,945081,946149,947351,948483,949456,950562,951541,952563,953590,954769,955768,956880,957991,958803,959874,960906,961923,962856,963644,964711,965774,966849,967830,968686,969653,970734,971747,972863,974102,975211,976113,977254,978306,979446,980430,981462,982643,983760,984844,985805,986930,988011,989238,990459,991428,992187,993048,993875,994888,995900,996992,997987,999142,1000149,1001190,1002446,1003483,1004536,1005501,1006511,1007660,1008795,1009778,1010920,1011987,1013029,1014136,1015272,1016196,1017002,1018078,1019180,1020283,1021409,1022494,1023711,1024855,1025948,1026937,1028127,1029249,1030386,1031371,1032563,1033550,1034457,1035235,1036125,1037326,1038319,1039508,1040610,1041767,1042550,1043557,1044496,1045432,1046381,1047361,1048481,1049630,1050609,1051686,1052810,1053916,1054989],sizes:[956,887,1311,1228,1327,1433,1449,1039,1137,1185,1403,1175,1284,672,916,1153,1086,1115,1198,747,1299,1197,1101,1170,1199,1103,985,1118,969,954,1103,788,1129,1015,1204,1031,1149,1059,962,1123,1061,1080,1058,1113,1023,1111,1090,1051,806,1113,1150,1089,1230,1044,1181,1089,1121,1121,1083,1031,1100,1094,1167,1072,1145,1162,1067,1117,988,1165,1210,1041,1204,1143,1022,1160,944,1163,1007,869,1002,983,930,1178,1048,1280,994,1091,958,1025,1096,1096,1119,975,1152,1100,1151,885,1243,1021,863,1032,1151,1088,1200,1177,931,1275,1069,1093,1106,1058,964,963,1036,759,1104,1117,1131,1066,1047,1231,1176,1106,1168,1098,1086,1064,1013,1092,1183,1060,1045,935,1097,1077,875,1077,960,984,1034,853,1039,1064,1212,1099,934,1055,1067,1001,995,1121,1005,1132,1048,1138,1070,896,893,906,940,923,965,856,947,1057,855,1066,965,963,1015,1166,1079,1048,1093,815,1095,875,1042,1029,844,1053,986,988,1172,1082,1042,1250,1151,896,1132,973,1049,1042,1169,1085,1020,1038,1029,1065,912,1008,929,1003,914,1039,899,1067,1026,960,1068,833,900,980,998,997,837,914,1063,844,1045,1058,919,995,958,1043,1032,907,1053,1003,1145,1195,948,1147,953,1046,1019,949,835,954,1070,959,973,1016,1067,1093,1043,840,998,1089,1009,988,1062,856,1118,1099,955,908,1104,850,946,1146,1008,1029,981,1058,1090,949,1039,982,1014,1064,993,1219,1094,1106,1027,995,1168,1052,732,988,994,1136,1092,737,955,996,1087,906,864,911,1096,1080,1116,913,1108,1106,1e3,1007,926,876,1098,944,1210,883,1017,908,1034,1096,805,1146,878,1153,996,1036,1029,1170,1062,1061,1030,1105,968,1045,1127,980,857,859,961,1064,922,1063,995,1100,1030,890,1005,970,976,901,885,1001,1095,913,1026,934,953,802,991,1060,1188,1053,967,1139,1006,894,924,1080,1105,1154,910,1134,972,1156,1137,904,1152,966,970,1097,907,1061,1066,1274,1201,883,1093,999,1025,937,1079,1073,898,1105,1064,1005,1036,1012,957,1200,1140,1075,1117,987,965,954,1132,1012,952,1042,1088,1001,968,873,1216,923,1069,822,931,807,1081,1018,821,1106,832,993,1002,1171,1093,1018,1066,863,1074,849,1058,1071,857,1091,1024,1037,1172,1087,999,1222,1170,924,1104,1028,1018,959,1206,1124,1077,1220,881,958,891,1128,964,1021,1001,912,995,1194,1113,1093,1105,913,1135,1045,1014,1022,960,1246,941,1084,1095,926,1028,997,1012,1012,941,1061,984,1099,1070,947,815,930,1110,1256,1285,982,1041,921,1031,1030,949,926,923,945,846,994,1121,916,1065,937,935,805,966,1071,1194,1061,983,1128,1057,875,940,1016,1084,1180,940,1104,1064,1029,945,1214,1138,1079,1154,1067,1109,1122,1055,1024,1114,994,1070,1107,972,864,878,976,1081,984,1106,995,986,963,946,1044,1090,1047,1189,1010,1052,1039,1114,956,1072,1014,1047,906,997,885,1029,1085,794,1125,850,865,883,1113,1045,1181,966,1075,1082,991,817,930,1106,1179,1168,954,1161,988,1020,1047,1217,1119,1044,1246,1184,922,1161,1037,989,1071,927,1089,1041,1276,1189,818,1125,805,1123,947,1141,1052,1020,937,858,1150,967,1063,1085,1136,797,1199,904,876,998,1104,918,1072,937,946,942,1156,1122,1039,1162,849,1008,969,988,1189,1072,1039,1034,942,1109,1095,945,1115,809,875,934,1085,924,1021,1140,1233,1230,906,1078,961,1051,938,955,972,1176,1121,1086,1128,854,1035,916,884,1105,1040,960,1062,920,1123,1071,975,1026,939,1220,928,1060,1141,984,950,914,973,827,995,1125,923,1106,943,953,795,994,1062,1180,1014,1002,1156,1008,873,911,1055,1094,1176,961,1129,1051,1037,991,1215,1110,1065,1174,1224,962,1118,1117,1048,984,1006,947,1127,1283,1225,901,1088,959,1045,961,1108,1022,952,1107,1043,1022,1177,978,986,961,941,878,983,1130,931,1064,951,956,818,979,1090,1182,1034,1008,1105,1028,836,931,1026,1094,1137,923,1130,1022,1050,960,1182,1095,1061,1175,1258,996,1064,1176,1028,905,1152,947,1039,1249,1288,1023,998,977,987,1070,985,1114,952,1120,852,973,1139,979,1025,1009,1253,861,1197,923,956,1006,1035,841,1046,1072,1194,990,1104,963,1111,977,1092,982,1145,1052,1019,957,1087,1050,876,946,1168,992,1015,929,1048,915,1017,966,1011,1233,918,1064,1132,1101,1043,913,1013,943,1107,1010,1264,1351,1136,1032,1100,996,689,971,1019,1049,1145,1037,1097,1097,1010,1160,1027,1123,1198,1205,1050,1050,1155,915,1141,1167,1439,1330,1326,1217,1253,1231,1301,1e3,1250,1160,1212,1236,1328,1250,1347,1086,1053,1031,1151,1127,986,1082,1033,1252,1033,1020,1153,1099,1147,1048,1191,1090,1008,1185,1194,1090,1163,1193,1048,1133,865,1090,1032,1219,1037,1068,1202,1132,973,1106,979,1022,1027,1179,999,1112,1111,812,1071,1032,1017,933,788,1067,1063,1075,981,856,967,1081,1013,1116,1239,1109,902,1141,1052,1140,984,1032,1181,1117,1084,961,1125,1081,1227,1221,969,759,861,827,1013,1012,1092,995,1155,1007,1041,1256,1037,1053,965,1010,1149,1135,983,1142,1067,1042,1107,1136,924,806,1076,1102,1103,1126,1085,1217,1144,1093,989,1190,1122,1137,985,1192,987,907,778,890,1201,993,1189,1102,1157,783,1007,939,936,949,980,1120,1149,979,1077,1124,1106,1073,1280],successes:[1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]};compressedData.data=byteArray;assert(typeof Module.LZ4==="object","LZ4 not present - was your app build with  -s LZ4=1  ?");Module.LZ4.loadPackage({metadata:metadata,compressedData:compressedData});Module["removeRunDependency"]("datafile_manimlib.data")}Module["addRunDependency"]("datafile_manimlib.data");if(!Module.preloadResults)Module.preloadResults={};Module.preloadResults[PACKAGE_NAME]={fromCache:false};if(fetched){processPackageData(fetched);fetched=null}else{fetchedCallback=processPackageData}}if(Module["calledRun"]){runWithFS()}else{if(!Module["preRun"])Module["preRun"]=[];Module["preRun"].push(runWithFS)}};loadPackage({files:[{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/top_level.txt",start:0,end:9,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/SOURCES.txt",start:9,end:3890,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/pbr.json",start:3890,end:3938,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/PKG-INFO",start:3938,end:12970,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/dependency_links.txt",start:12970,end:12971,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/not-zip-safe",start:12971,end:12972,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/requires.txt",start:12972,end:13065,audio:0},{filename:"/lib/python3.7/site-packages/manimlib-0.1.11.dev212-py3.7.egg-info/entry_points.txt",start:13065,end:13106,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/ctex_template.tex",start:13106,end:13600,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/media_dir.txt",start:13600,end:13605,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/extract_scene.py",start:13605,end:18545,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/constants.py",start:18545,end:25993,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/config.py",start:25993,end:34740,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/tex_template.tex",start:34740,end:35287,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/__init__.py",start:35287,end:37272,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/imports.py",start:37272,end:40902,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/utils.py",start:40902,end:41579,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_scene.py",start:41579,end:41829,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/web_mock.py",start:41829,end:42131,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\sum_{n=1}^\\infty \\frac{1}{n^2} = \\frac{\\pi^2}{6}",start:42131,end:122944,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/8",start:122944,end:134148,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/6",start:134148,end:142132,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\sum_{k=1}^\\infty {1 \\over k^2} = {\\pi^2 \\over 6}",start:142132,end:230728,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/-",start:230728,end:232016,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/4",start:232016,end:238364,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/3",start:238364,end:248707,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/a",start:248707,end:256401,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{can we do?}",start:256401,end:323030,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/+",start:323030,end:326745,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{That was a non-linear function \\\\applied to the grid}",start:326745,end:683743,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/1",start:683743,end:689371,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{This is some \\LaTeX}",start:689371,end:829753,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{That was a transform}",start:829753,end:1000482,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{This is a grid}",start:1000482,end:1103829,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/5",start:1103829,end:1111474,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/LINUX_CURRENT_DIR",start:1111474,end:1112942,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/7",start:1112942,end:1119995,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/9",start:1119995,end:1128855,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{text}",start:1128855,end:1235320,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\dots",start:1235320,end:1240082,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/0",start:1240082,end:1244981,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{What animations}",start:1244981,end:1385458,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{This is a some}",start:1385458,end:1491923,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/2",start:1491923,end:1500262,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/web/tex_points/\\textrm{This is a some text}",start:1500262,end:1638347,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/moving_camera_scene.py",start:1638347,end:1639521,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/media_dir.txt",start:1639521,end:1639526,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/scene.py",start:1639526,end:1658605,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/reconfigurable_scene.py",start:1658605,end:1660656,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/three_d_scene.py",start:1660656,end:1667088,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/sample_space_scene.py",start:1667088,end:1672394,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/vector_space_scene.py",start:1672394,end:1690904,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/graph_scene.py",start:1690904,end:1710492,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/scene/zoomed_scene.py",start:1710492,end:1714005,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_thought.svg",start:1714005,end:1715348,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/Bubbles_speech.svg",start:1715348,end:1716064,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/files/PiCreatures_plain.svg",start:1716064,end:1717901,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/creation.py",start:1717901,end:1723098,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/movement.py",start:1723098,end:1725318,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/fading.py",start:1725318,end:1729234,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/growing.py",start:1729234,end:1730485,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/composition.py",start:1730485,end:1735423,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/numbers.py",start:1735423,end:1737145,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/indication.py",start:1737145,end:1745022,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/specialized.py",start:1745022,end:1747648,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/rotation.py",start:1747648,end:1749066,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/update.py",start:1749066,end:1750302,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/animation.py",start:1750302,end:1755412,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/animation/transform.py",start:1755412,end:1765274,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/color.py",start:1765274,end:1768015,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/bezier.py",start:1768015,end:1772391,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/paths.py",start:1772391,end:1773815,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/space_ops.py",start:1773815,end:1779683,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/simple_functions.py",start:1779683,end:1781960,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/tex_file_writing.py",start:1781960,end:1784876,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/file_ops.py",start:1784876,end:1786881,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/debug.py",start:1786881,end:1787541,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/images.py",start:1787541,end:1788305,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/strings.py",start:1788305,end:1790168,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/rate_functions.py",start:1790168,end:1792334,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/iterables.py",start:1792334,end:1795452,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/config_ops.py",start:1795452,end:1798253,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/utils/sounds.py",start:1798253,end:1798992,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_utils.py",start:1798992,end:1800564,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject_update_utils.py",start:1800564,end:1803158,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_d_shading_utils.py",start:1803158,end:1804559,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/changing.py",start:1804559,end:1807761,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/shape_matchers.py",start:1807761,end:1810245,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/frame.py",start:1810245,end:1811288,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/three_dimensions.py",start:1811288,end:1815570,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/number_line.py",start:1815570,end:1821788,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/functions.py",start:1821788,end:1824882,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/numbers.py",start:1824882,end:1829488,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/matrix.py",start:1829488,end:1835291,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/vector_field.py",start:1835291,end:1846825,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/probability.py",start:1846825,end:1854710,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/geometry.py",start:1854710,end:1879346,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/mobject.py",start:1879346,end:1916388,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/value_tracker.py",start:1916388,end:1917785,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/coordinate_systems.py",start:1917785,end:1931161,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/image_mobject.py",start:1931161,end:1935406,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/point_cloud_mobject.py",start:1935406,end:1943732,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/types/vectorized_mobject.py",start:1943732,end:1976939,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/drawings.py",start:1976939,end:2010713,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/tex_mobject.py",start:2010713,end:2022039,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/brace.py",start:2022039,end:2026815,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/mobject/svg/svg_mobject.py",start:2026815,end:2042521,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/moving_camera.py",start:2042521,end:2045627,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/mapping_camera.py",start:2045627,end:2050130,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/three_d_camera.py",start:2050130,end:2058637,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/camera/multi_camera.py",start:2058637,end:2060877,audio:0},{
filename:"/lib/python3.7/site-packages/manimlib/camera/camera.py",start:2060877,end:2075661,audio:0},{filename:"/lib/python3.7/site-packages/manimlib/container/container.py",start:2075661,end:2076369,audio:0},{filename:"/bin/manim",start:2076369,end:2076541,audio:0}],remote_package_size:1060365,package_uuid:"ff7b5797-545f-45a7-80d8-735cd899a90c"})})();