const estimate = document.querySelector("#estimate");
const createButton = document.querySelector("#previewButton");
const account = document.querySelector("#account");
const ruleText = document.querySelector("#ruleText");
const budgetInput = document.querySelector("#budgetInput");
const resultPanel = document.querySelector("#resultPanel");
const authButton = document.querySelector("#authButton");
const authStatusText = document.querySelector("#authStatusText");
const authModal = document.querySelector("#authModal");
const closeAuthModal = document.querySelector("#closeAuthModal");
const startOAuth = document.querySelector("#startOAuth");
const refreshOAuth = document.querySelector("#refreshOAuth");
const clearOAuth = document.querySelector("#clearOAuth");
const exchangeAuthCode = document.querySelector("#exchangeAuthCode");
const authCodeInput = document.querySelector("#authCodeInput");
const authCurrentState = document.querySelector("#authCurrentState");
const authMessage = document.querySelector("#authMessage");
const changeAccount = document.querySelector("#changeAccount");
const accountModal = document.querySelector("#accountModal");
const closeAccountModal = document.querySelector("#closeAccountModal");
const cancelAccountModal = document.querySelector("#cancelAccountModal");
const accountRows = document.querySelector("#accountRows");
const accountSearch = document.querySelector("#accountSearch");
const reloadAccounts = document.querySelector("#reloadAccounts");
const clearAccountSearch = document.querySelector("#clearAccountSearch");
const clearSelectedAccount = document.querySelector("#clearSelectedAccount");
const confirmAccount = document.querySelector("#confirmAccount");
const selectedAccountCount = document.querySelector("#selectedAccountCount");
const selectedAccountName = document.querySelector("#selectedAccountName");
const accountPageInfo = document.querySelector("#accountPageInfo");
const accountWarning = document.querySelector("#accountWarning");
const editProject = document.querySelector("#editProject");
const projectModal = document.querySelector("#projectModal");
const closeProjectModal = document.querySelector("#closeProjectModal");
const cancelProjectModal = document.querySelector("#cancelProjectModal");
const saveProjectConfig = document.querySelector("#saveProjectConfig");
const projectBudget = document.querySelector("#projectBudget");
const projectCpaBid = document.querySelector("#projectCpaBid");
const projectName = document.querySelector("#projectName");
const projectStatus = document.querySelector("#projectStatus");
const projectStartDate = document.querySelector("#projectStartDate");
const projectEndDate = document.querySelector("#projectEndDate");
const projectRandomSuffix = document.querySelector("#projectRandomSuffix");
const projectSummary = document.querySelector("#projectSummary");
const projectAdType = document.querySelector("#projectAdType");
const projectDeliveryType = document.querySelector("#projectDeliveryType");
const projectDeliveryMode = document.querySelector("#projectDeliveryMode");
const projectMarketingGoal = document.querySelector("#projectMarketingGoal");
const projectExternalAction = document.querySelector("#projectExternalAction");
const projectDeepExternalAction = document.querySelector("#projectDeepExternalAction");
const microAppInstanceId = document.querySelector("#microAppInstanceId");
const selectWechatGame = document.querySelector("#selectWechatGame");
const projectInventory = document.querySelector("#projectInventory");
const projectAudienceSource = document.querySelector("#projectAudienceSource");
const targetGender = document.querySelector("#targetGender");
const targetLocationType = document.querySelector("#targetLocationType");
const targetAgeUnlimited = document.querySelector("#targetAgeUnlimited");
const targetRegionSummary = document.querySelector("#targetRegionSummary");
const targetRegionClear = document.querySelector("#targetRegionClear");
const targetRegionSearch = document.querySelector("#targetRegionSearch");
const targetProvinceList = document.querySelector("#targetProvinceList");
const targetCityList = document.querySelector("#targetCityList");
const bidStrategyPreview = document.querySelector("#bidStrategyPreview");
const adInfoSummary = document.querySelector("#adInfoSummary");
const editAdInfo = document.querySelector("#editAdInfo");
const adInfoModal = document.querySelector("#adInfoModal");
const closeAdInfoModal = document.querySelector("#closeAdInfoModal");
const cancelAdInfoModal = document.querySelector("#cancelAdInfoModal");
const saveAdInfoConfig = document.querySelector("#saveAdInfoConfig");
const adIdentity = document.querySelector("#adIdentity");
const awemeSource = document.querySelector("#awemeSource");
const awemeMatchMode = document.querySelector("#awemeMatchMode");
const awemeAccountId = document.querySelector("#awemeAccountId");
const awemeAccountName = document.querySelector("#awemeAccountName");
const selectAwemeAccount = document.querySelector("#selectAwemeAccount");
const callToActionButtons = document.querySelector("#callToActionButtons");
const adProductName = document.querySelector("#adProductName");
const adSellingPoint = document.querySelector("#adSellingPoint");
const adSource = document.querySelector("#adSource");
const commentDisable = document.querySelector("#commentDisable");
const promotionName = document.querySelector("#promotionName");
const promotionStatus = document.querySelector("#promotionStatus");
const promotionRandomSuffix = document.querySelector("#promotionRandomSuffix");
const editCreative = document.querySelector("#editCreative");
const creativeModal = document.querySelector("#creativeModal");
const closeCreativeModal = document.querySelector("#closeCreativeModal");
const cancelCreativeModal = document.querySelector("#cancelCreativeModal");
const saveCreativeConfig = document.querySelector("#saveCreativeConfig");
const clearCreative = document.querySelector("#clearCreative");
const creativeCount = document.querySelector("#creativeCount");
const creativeSummary = document.querySelector("#creativeSummary");
const creativeEstimate = document.querySelector("#creativeEstimate");
const dynamicCreativeSwitch = document.querySelector("#dynamicCreativeSwitch");
const videoHpVisibility = document.querySelector("#videoHpVisibility");
const creativeGroupCount = document.querySelector("#creativeGroupCount");
const videoCount = document.querySelector("#videoCount");
const imageCount = document.querySelector("#imageCount");
const titleCount = document.querySelector("#titleCount");
const creativeGroupName = document.querySelector("#creativeGroupName");
const videoIds = document.querySelector("#videoIds");
const videoCoverIds = document.querySelector("#videoCoverIds");
const chooseVideoFiles = document.querySelector("#chooseVideoFiles");
const chooseVideoFolder = document.querySelector("#chooseVideoFolder");
const localVideoFilesInput = document.querySelector("#localVideoFiles");
const localVideoFolderInput = document.querySelector("#localVideoFolder");
const localVideoList = document.querySelector("#localVideoList");
const localVideoStatus = document.querySelector("#localVideoStatus");
const randomLocalVideos = document.querySelector("#randomLocalVideos");
const clearLocalVideos = document.querySelector("#clearLocalVideos");
const editTitlePack = document.querySelector("#editTitlePack");
const titlePackModal = document.querySelector("#titlePackModal");
const closeTitlePackModal = document.querySelector("#closeTitlePackModal");
const cancelTitlePackModal = document.querySelector("#cancelTitlePackModal");
const saveTitlePackConfig = document.querySelector("#saveTitlePackConfig");
const clearTitlePack = document.querySelector("#clearTitlePack");
const shuffleTitlePack = document.querySelector("#shuffleTitlePack");
const titlePackCount = document.querySelector("#titlePackCount");
const titlePackSummary = document.querySelector("#titlePackSummary");
const titlePackEstimate = document.querySelector("#titlePackEstimate");
const titleSource = document.querySelector("#titleSource");
const titleDistribution = document.querySelector("#titleDistribution");
const titlePerPromotion = document.querySelector("#titlePerPromotion");
const titlePackName = document.querySelector("#titlePackName");
const titleSearchKeyword = document.querySelector("#titleSearchKeyword");
const titleAccountScope = document.querySelector("#titleAccountScope");
const titlePackTitles = document.querySelector("#titlePackTitles");
const titlePackWordLists = document.querySelector("#titlePackWordLists");
const editLanding = document.querySelector("#editLanding");
const landingModal = document.querySelector("#landingModal");
const closeLandingModal = document.querySelector("#closeLandingModal");
const cancelLandingModal = document.querySelector("#cancelLandingModal");
const saveLandingConfig = document.querySelector("#saveLandingConfig");
const clearLanding = document.querySelector("#clearLanding");
const landingCount = document.querySelector("#landingCount");
const landingSummary = document.querySelector("#landingSummary");
const landingEstimate = document.querySelector("#landingEstimate");
const landingPerPromotion = document.querySelector("#landingPerPromotion");
const landingTypeSource = document.querySelector("#landingTypeSource");
const landingOnlyDeliverable = document.querySelector("#landingOnlyDeliverable");
const landingSearchKeyword = document.querySelector("#landingSearchKeyword");
const landingRefresh = document.querySelector("#landingRefresh");
const landingClearSearch = document.querySelector("#landingClearSearch");
const landingOpenOrange = document.querySelector("#landingOpenOrange");
const landingRows = document.querySelector("#landingRows");
const landingUrls = document.querySelector("#landingUrls");
const landingNames = document.querySelector("#landingNames");
const miniGameModal = document.querySelector("#miniGameModal");
const miniGameDialogTitle = document.querySelector("#miniGameDialogTitle");
const closeMiniGameModal = document.querySelector("#closeMiniGameModal");
const miniGameKeyword = document.querySelector("#miniGameKeyword");
const miniGameSearch = document.querySelector("#miniGameSearch");
const miniGameManage = document.querySelector("#miniGameManage");
const miniGameSort = document.querySelector("#miniGameSort");
const miniGameRows = document.querySelector("#miniGameRows");
const miniGamePageInfo = document.querySelector("#miniGamePageInfo");
const miniGameCurrentPage = document.querySelector("#miniGameCurrentPage");
const miniGamePrev = document.querySelector("#miniGamePrev");
const miniGameNext = document.querySelector("#miniGameNext");
const miniGamePageSize = document.querySelector("#miniGamePageSize");
const miniGameHelpText = document.querySelector("#miniGameHelpText");
const miniGameIconHead = document.querySelector("#miniGameIconHead");
const miniGameNameHead = document.querySelector("#miniGameNameHead");
const miniGameIdHead = document.querySelector("#miniGameIdHead");
const awemeModal = document.querySelector("#awemeModal");
const closeAwemeModal = document.querySelector("#closeAwemeModal");
const awemeKeyword = document.querySelector("#awemeKeyword");
const awemeSearch = document.querySelector("#awemeSearch");
const reloadAwemeAccounts = document.querySelector("#reloadAwemeAccounts");
const awemeRows = document.querySelector("#awemeRows");
const awemePageInfo = document.querySelector("#awemePageInfo");

const MAX_SELECTED_ADVERTISERS = 20;
const AUTH_STORAGE_KEY = "oceanengineAuth";
const TARGET_REGIONS = [
  { id: 11, name: "???", cities: [{ id: 11, name: "???" }] },
  { id: 12, name: "???", cities: [{ id: 12, name: "???" }] },
  { id: 13, name: "???", cities: [{ id: 130100, name: "????" }, { id: 130200, name: "???" }, { id: 130300, name: "????" }, { id: 130400, name: "???" }, { id: 130500, name: "???" }, { id: 130600, name: "???" }, { id: 130700, name: "????" }, { id: 130800, name: "???" }, { id: 130900, name: "???" }, { id: 131000, name: "???" }, { id: 131100, name: "???" }] },
  { id: 14, name: "???", cities: [{ id: 140100, name: "???" }, { id: 140200, name: "???" }, { id: 140300, name: "???" }, { id: 140400, name: "???" }, { id: 140500, name: "???" }, { id: 140600, name: "???" }, { id: 140700, name: "???" }, { id: 140800, name: "???" }, { id: 140900, name: "???" }, { id: 141000, name: "???" }, { id: 141100, name: "???" }] },
  { id: 15, name: "??????", cities: [{ id: 150100, name: "?????" }, { id: 150200, name: "???" }, { id: 150300, name: "???" }, { id: 150400, name: "???" }, { id: 150500, name: "???" }, { id: 150600, name: "?????" }, { id: 150700, name: "?????" }, { id: 150800, name: "?????" }, { id: 150900, name: "?????" }, { id: 152200, name: "???" }, { id: 152500, name: "?????" }, { id: 152900, name: "????" }] },
  { id: 21, name: "???", cities: [{ id: 210100, name: "???" }, { id: 210200, name: "???" }, { id: 210300, name: "???" }, { id: 210400, name: "???" }, { id: 210500, name: "???" }, { id: 210600, name: "???" }, { id: 210700, name: "???" }, { id: 210800, name: "???" }, { id: 210900, name: "???" }, { id: 211000, name: "???" }, { id: 211100, name: "???" }, { id: 211200, name: "???" }, { id: 211300, name: "???" }, { id: 211400, name: "????" }] },
  { id: 22, name: "???", cities: [{ id: 220100, name: "???" }, { id: 220200, name: "???" }, { id: 220300, name: "???" }, { id: 220400, name: "???" }, { id: 220500, name: "???" }, { id: 220600, name: "???" }, { id: 220700, name: "???" }, { id: 220800, name: "???" }, { id: 222400, name: "????????" }] },
  { id: 23, name: "????", cities: [{ id: 230100, name: "????" }, { id: 230200, name: "?????" }, { id: 230300, name: "???" }, { id: 230400, name: "???" }, { id: 230500, name: "????" }, { id: 230600, name: "???" }, { id: 230700, name: "???" }, { id: 230800, name: "????" }, { id: 230900, name: "????" }, { id: 231000, name: "????" }, { id: 231100, name: "???" }, { id: 231200, name: "???" }, { id: 232700, name: "??????" }] },
  { id: 31, name: "???", cities: [{ id: 31, name: "???" }] },
  { id: 32, name: "???", cities: [{ id: 320100, name: "???" }, { id: 320200, name: "???" }, { id: 320300, name: "???" }, { id: 320400, name: "???" }, { id: 320500, name: "???" }, { id: 320600, name: "???" }, { id: 320700, name: "????" }, { id: 320800, name: "???" }, { id: 320900, name: "???" }, { id: 321000, name: "???" }, { id: 321100, name: "???" }, { id: 321200, name: "???" }, { id: 321300, name: "???" }] },
  { id: 33, name: "???", cities: [{ id: 330100, name: "???" }, { id: 330200, name: "???" }, { id: 330300, name: "???" }, { id: 330400, name: "???" }, { id: 330500, name: "???" }, { id: 330600, name: "???" }, { id: 330700, name: "???" }, { id: 330800, name: "???" }, { id: 330900, name: "???" }, { id: 331000, name: "???" }, { id: 331100, name: "???" }] },
  { id: 34, name: "???", cities: [{ id: 340100, name: "???" }, { id: 340200, name: "???" }, { id: 340300, name: "???" }, { id: 340400, name: "???" }, { id: 340500, name: "????" }, { id: 340600, name: "???" }, { id: 340700, name: "???" }, { id: 340800, name: "???" }, { id: 341000, name: "???" }, { id: 341100, name: "???" }, { id: 341200, name: "???" }, { id: 341300, name: "???" }, { id: 341500, name: "???" }, { id: 341600, name: "???" }, { id: 341700, name: "???" }, { id: 341800, name: "???" }] },
  { id: 35, name: "???", cities: [{ id: 350100, name: "???" }, { id: 350200, name: "???" }, { id: 350300, name: "???" }, { id: 350400, name: "???" }, { id: 350500, name: "???" }, { id: 350600, name: "???" }, { id: 350700, name: "???" }, { id: 350800, name: "???" }, { id: 350900, name: "???" }] },
  { id: 36, name: "???", cities: [{ id: 360100, name: "???" }, { id: 360200, name: "????" }, { id: 360300, name: "???" }, { id: 360400, name: "???" }, { id: 360500, name: "???" }, { id: 360600, name: "???" }, { id: 360700, name: "???" }, { id: 360800, name: "???" }, { id: 360900, name: "???" }, { id: 361000, name: "???" }, { id: 361100, name: "???" }] },
  { id: 37, name: "???", cities: [{ id: 370100, name: "???" }, { id: 370200, name: "???" }, { id: 370300, name: "???" }, { id: 370400, name: "???" }, { id: 370500, name: "???" }, { id: 370600, name: "???" }, { id: 370700, name: "???" }, { id: 370800, name: "???" }, { id: 370900, name: "???" }, { id: 371000, name: "???" }, { id: 371100, name: "???" }, { id: 371300, name: "???" }, { id: 371400, name: "???" }, { id: 371500, name: "???" }, { id: 371600, name: "???" }, { id: 371700, name: "???" }] },
  { id: 41, name: "???", cities: [{ id: 410100, name: "???" }, { id: 410200, name: "???" }, { id: 410300, name: "???" }, { id: 410400, name: "????" }, { id: 410500, name: "???" }, { id: 410600, name: "???" }, { id: 410700, name: "???" }, { id: 410800, name: "???" }, { id: 410900, name: "???" }, { id: 411000, name: "???" }, { id: 411100, name: "???" }, { id: 411200, name: "????" }, { id: 411300, name: "???" }, { id: 411400, name: "???" }, { id: 411500, name: "???" }, { id: 411600, name: "???" }, { id: 411700, name: "????" }, { id: 419001, name: "???" }] },
  { id: 42, name: "???", cities: [{ id: 420100, name: "???" }, { id: 420200, name: "???" }, { id: 420300, name: "???" }, { id: 420500, name: "???" }, { id: 420600, name: "???" }, { id: 420700, name: "???" }, { id: 420800, name: "???" }, { id: 420900, name: "???" }, { id: 421000, name: "???" }, { id: 421100, name: "???" }, { id: 421200, name: "???" }, { id: 421300, name: "???" }, { id: 422800, name: "??????????" }, { id: 429004, name: "???" }, { id: 429005, name: "???" }, { id: 429006, name: "???" }, { id: 429021, name: "?????" }] },
  { id: 43, name: "???", cities: [{ id: 430100, name: "???" }, { id: 430200, name: "???" }, { id: 430300, name: "???" }, { id: 430400, name: "???" }, { id: 430500, name: "???" }, { id: 430600, name: "???" }, { id: 430700, name: "???" }, { id: 430800, name: "????" }, { id: 430900, name: "???" }, { id: 431000, name: "???" }, { id: 431100, name: "???" }, { id: 431200, name: "???" }, { id: 431300, name: "???" }, { id: 433100, name: "??????????" }] },
  { id: 44, name: "???", cities: [{ id: 440100, name: "???" }, { id: 440200, name: "???" }, { id: 440300, name: "???" }, { id: 440400, name: "???" }, { id: 440500, name: "???" }, { id: 440600, name: "???" }, { id: 440700, name: "???" }, { id: 440800, name: "???" }, { id: 440900, name: "???" }, { id: 441200, name: "???" }, { id: 441300, name: "???" }, { id: 441400, name: "???" }, { id: 441500, name: "???" }, { id: 441600, name: "???" }, { id: 441700, name: "???" }, { id: 441800, name: "???" }, { id: 441900, name: "???" }, { id: 442000, name: "???" }, { id: 445100, name: "???" }, { id: 445200, name: "???" }, { id: 445300, name: "???" }] },
  { id: 45, name: "???????", cities: [{ id: 450100, name: "???" }, { id: 450200, name: "???" }, { id: 450300, name: "???" }, { id: 450400, name: "???" }, { id: 450500, name: "???" }, { id: 450600, name: "????" }, { id: 450700, name: "???" }, { id: 450800, name: "???" }, { id: 450900, name: "???" }, { id: 451000, name: "???" }, { id: 451100, name: "???" }, { id: 451200, name: "???" }, { id: 451300, name: "???" }, { id: 451400, name: "???" }] },
  { id: 46, name: "???", cities: [{ id: 460100, name: "???" }, { id: 460200, name: "???" }, { id: 460300, name: "???" }, { id: 460400, name: "???" }, { id: 469001, name: "????" }, { id: 469002, name: "???" }, { id: 469005, name: "???" }, { id: 469006, name: "???" }, { id: 469007, name: "???" }, { id: 469021, name: "???" }, { id: 469022, name: "???" }, { id: 469023, name: "???" }, { id: 469024, name: "???" }, { id: 469025, name: "???????" }, { id: 469026, name: "???????" }, { id: 469027, name: "???????" }, { id: 469028, name: "???????" }, { id: 469029, name: "?????????" }, { id: 469030, name: "?????????" }] },
  { id: 50, name: "???", cities: [{ id: 50, name: "???" }] },
  { id: 51, name: "???", cities: [{ id: 510100, name: "???" }, { id: 510300, name: "???" }, { id: 510400, name: "????" }, { id: 510500, name: "???" }, { id: 510600, name: "???" }, { id: 510700, name: "???" }, { id: 510800, name: "???" }, { id: 510900, name: "???" }, { id: 511000, name: "???" }, { id: 511100, name: "???" }, { id: 511300, name: "???" }, { id: 511400, name: "???" }, { id: 511500, name: "???" }, { id: 511600, name: "???" }, { id: 511700, name: "???" }, { id: 511800, name: "???" }, { id: 511900, name: "???" }, { id: 512000, name: "???" }, { id: 513200, name: "?????????" }, { id: 513300, name: "???????" }, { id: 513400, name: "???????" }] },
  { id: 52, name: "???", cities: [{ id: 520100, name: "???" }, { id: 520200, name: "????" }, { id: 520300, name: "???" }, { id: 520400, name: "???" }, { id: 520500, name: "???" }, { id: 520600, name: "???" }, { id: 522300, name: "???????????" }, { id: 522600, name: "??????????" }, { id: 522700, name: "??????????" }] },
  { id: 53, name: "???", cities: [{ id: 530100, name: "???" }, { id: 530300, name: "???" }, { id: 530400, name: "???" }, { id: 530500, name: "???" }, { id: 530600, name: "???" }, { id: 530700, name: "???" }, { id: 530800, name: "???" }, { id: 530900, name: "???" }, { id: 532300, name: "???????" }, { id: 532500, name: "??????????" }, { id: 532600, name: "?????????" }, { id: 532800, name: "?????????" }, { id: 532900, name: "???????" }, { id: 533100, name: "??????????" }, { id: 533300, name: "????????" }, { id: 533400, name: "???????" }] },
  { id: 54, name: "?????", cities: [{ id: 540100, name: "???" }, { id: 540200, name: "????" }, { id: 540300, name: "???" }, { id: 540400, name: "???" }, { id: 540500, name: "???" }, { id: 540600, name: "???" }, { id: 542500, name: "????" }] },
  { id: 61, name: "???", cities: [{ id: 610100, name: "???" }, { id: 610200, name: "???" }, { id: 610300, name: "???" }, { id: 610400, name: "???" }, { id: 610500, name: "???" }, { id: 610600, name: "???" }, { id: 610700, name: "???" }, { id: 610800, name: "???" }, { id: 610900, name: "???" }, { id: 611000, name: "???" }] },
  { id: 62, name: "???", cities: [{ id: 620100, name: "???" }, { id: 620200, name: "????" }, { id: 620300, name: "???" }, { id: 620400, name: "???" }, { id: 620500, name: "???" }, { id: 620600, name: "???" }, { id: 620700, name: "???" }, { id: 620800, name: "???" }, { id: 620900, name: "???" }, { id: 621000, name: "???" }, { id: 621100, name: "???" }, { id: 621200, name: "???" }, { id: 622900, name: "???????" }, { id: 623000, name: "???????" }] },
  { id: 63, name: "???", cities: [{ id: 630100, name: "???" }, { id: 630200, name: "???" }, { id: 632200, name: "???????" }, { id: 632300, name: "???????" }, { id: 632500, name: "???????" }, { id: 632600, name: "???????" }, { id: 632700, name: "???????" }, { id: 632800, name: "??????????" }] },
  { id: 64, name: "???????", cities: [{ id: 640100, name: "???" }, { id: 640200, name: "????" }, { id: 640300, name: "???" }, { id: 640400, name: "???" }, { id: 640500, name: "???" }] },
  { id: 65, name: "????????", cities: [{ id: 650100, name: "?????" }, { id: 650200, name: "?????" }, { id: 650400, name: "????" }, { id: 650500, name: "???" }, { id: 652300, name: "???????" }, { id: 652700, name: "?????????" }, { id: 652800, name: "?????????" }, { id: 652900, name: "?????" }, { id: 653000, name: "???????????" }, { id: 653100, name: "????" }, { id: 653200, name: "????" }, { id: 654000, name: "????????" }, { id: 654200, name: "????" }, { id: 654300, name: "?????" }, { id: 659001, name: "????" }, { id: 659002, name: "????" }, { id: 659003, name: "?????" }, { id: 659004, name: "????" }, { id: 659005, name: "???" }, { id: 659006, name: "????" }, { id: 659007, name: "???" }, { id: 659008, name: "?????" }, { id: 659009, name: "???" }, { id: 659010, name: "????" }] },
];

let advertisers = [];
let selectedAdvertisers = [];
let miniGames = [];
let awemeAccounts = [];
let miniGamePage = 1;
let miniGameTotalPage = 1;
if (Array.isArray(window.FULL_TARGET_REGIONS) && window.FULL_TARGET_REGIONS.length) {
  TARGET_REGIONS.splice(0, TARGET_REGIONS.length, ...window.FULL_TARGET_REGIONS);
}
let activeTargetProvinceId = TARGET_REGIONS[0].id;
let selectedTargetCityIds = new Set();

function readOceanAuth() {
  try {
    return JSON.parse(localStorage.getItem(AUTH_STORAGE_KEY) || "{}");
  } catch (error) {
    console.warn("授权信息读取失败", error);
    return {};
  }
}

function writeOceanAuth(nextAuth) {
  const auth = Object.assign({}, readOceanAuth(), nextAuth, { savedAt: Date.now() });
  if (!auth.accessToken) return;
  localStorage.setItem(AUTH_STORAGE_KEY, JSON.stringify(auth));
  updateAuthStatus();
}

function removeOceanAuth() {
  localStorage.removeItem(AUTH_STORAGE_KEY);
  updateAuthStatus();
}

function maskToken(value) {
  const token = String(value || "");
  if (!token) return "未保存";
  if (token.length <= 12) return "已保存";
  return `${token.slice(0, 6)}...${token.slice(-6)}`;
}

function authFromPayload(payload) {
  const data = payload && payload.data ? payload.data : {};
  return {
    accessToken: data.access_token || data.accessToken || payload.access_token || payload.accessToken || "",
    refreshToken: data.refresh_token || data.refreshToken || payload.refresh_token || payload.refreshToken || "",
  };
}

function syncAuthFromResponse(response) {
  const accessToken = response.headers.get("X-OE-Access-Token");
  const refreshToken = response.headers.get("X-OE-Refresh-Token");
  if (accessToken || refreshToken) {
    writeOceanAuth({ accessToken, refreshToken });
  }
}

async function apiFetch(url, options = {}) {
  const headers = new Headers(options.headers || {});
  const auth = readOceanAuth();
  if (auth.accessToken) headers.set("X-OE-Access-Token", auth.accessToken);
  if (auth.refreshToken) headers.set("X-OE-Refresh-Token", auth.refreshToken);

  const response = await fetch(url, {
    ...options,
    headers,
  });
  syncAuthFromResponse(response);
  return response;
}

function updateAuthStatus(message) {
  const auth = readOceanAuth();
  const authed = Boolean(auth.accessToken);
  if (authButton) {
    authButton.classList.toggle("is-authed", authed);
  }
  if (authStatusText) {
    authStatusText.textContent = authed ? "已授权" : "未授权";
  }
  if (authCurrentState) {
    const savedTime = auth.savedAt ? new Date(auth.savedAt).toLocaleString() : "";
    authCurrentState.textContent = authed
      ? `当前浏览器已保存授权。Access Token：${maskToken(auth.accessToken)}；Refresh Token：${maskToken(auth.refreshToken)}${savedTime ? `；保存时间：${savedTime}` : ""}`
      : "当前浏览器未保存授权。";
  }
  if (authMessage && message) {
    authMessage.textContent = message;
  }
}

function openAuthDialog() {
  updateAuthStatus();
  authModal.classList.add("is-open");
  authModal.setAttribute("aria-hidden", "false");
}

function closeAuthDialog() {
  authModal.classList.remove("is-open");
  authModal.setAttribute("aria-hidden", "true");
}

async function startOAuthFlow() {
  authMessage.textContent = "正在生成授权链接...";
  try {
    const response = await apiFetch("/api/oauth/authorize-url");
    const result = await response.json();
    if (!response.ok || result.code !== 0 || !result.data || !result.data.url) {
      throw new Error(result.message || "授权链接生成失败");
    }
    location.href = result.data.url;
  } catch (error) {
    updateAuthStatus(error.message);
  }
}

async function exchangeLocalAuthCode() {
  const authCode = authCodeInput.value.trim();
  if (!authCode) {
    updateAuthStatus("请先粘贴 code 或 auth_code。");
    return;
  }

  authMessage.textContent = "正在换取 Token...";
  try {
    const response = await apiFetch("/api/oauth/exchange", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ auth_code: authCode }),
    });
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "授权码换取 Token 失败");
    }
    const tokens = authFromPayload(result);
    if (tokens.accessToken) {
      writeOceanAuth(tokens);
      authCodeInput.value = "";
      updateAuthStatus("授权已保存到当前浏览器。");
      return;
    }
    throw new Error("接口未返回 access_token。");
  } catch (error) {
    updateAuthStatus(error.message);
  }
}

async function refreshLocalOAuth() {
  const auth = readOceanAuth();
  if (!auth.refreshToken) {
    updateAuthStatus("当前浏览器没有 Refresh Token，请重新获取授权。");
    return;
  }

  authMessage.textContent = "正在刷新 Token...";
  try {
    const response = await apiFetch("/api/oauth/refresh", { method: "POST" });
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "刷新 Token 失败");
    }
    const tokens = authFromPayload(result);
    if (tokens.accessToken) {
      writeOceanAuth(tokens);
      updateAuthStatus("Token 已刷新并保存。");
      return;
    }
    throw new Error("刷新接口未返回 access_token。");
  } catch (error) {
    updateAuthStatus(error.message);
  }
}

function clearLocalOAuth() {
  removeOceanAuth();
  updateAuthStatus("已清除当前浏览器保存的授权。");
}

let projectConfig = {
  budget: 300,
  cpaBid: 1.34,
  projectName: "0421-高手来挪车-1-复制",
  projectStatus: "DISABLE",
  startDate: "2026-06-02",
  endDate: "2035-04-21",
  landingType: "MICRO_GAME",
  adType: "ALL",
  deliveryType: "NORMAL",
  deliveryMode: "PROCEDURAL",
  marketingGoal: "VIDEO_AND_IMAGE",
  relatedTask: "OFF",
  deliveryProduct: "WECHAT_GAME",
  externalAction: "AD_CONVERT_TYPE_GAME_ADDICTION",
  deepExternalAction: "",
  microMatchMode: "ACCOUNT",
  workbenchVersion: "OLD",
  microAppInstanceId: "1827014283265305",
  inventoryCatalog: "UNIVERSAL_SMART",
  audienceSource: "NONE",
  targeting: {
    age: [],
    gender: "NONE",
    city: [],
    locationType: "CURRENT",
  },
  budgetConfigMode: "UNIFIED",
  scheduleType: "SCHEDULE_FROM_NOW",
  scheduleTimeMode: "ALL",
  bidStrategy: "CUSTOM",
  budgetMode: "BUDGET_MODE_DAY",
  pricing: "PRICING_OCPM",
  budgetOptimizeSwitch: "OFF",
  bidBudgetMode: "UNIFIED",
};

let adInfoConfig = {
  name: "0421-高手来挪车-3-动态-top-16-复制",
  status: "DISABLE",
  identity: "AWEME",
  awemeSource: "MANUAL",
  awemeMatchMode: "ALL",
  awemeId: "71565649449",
  awemeName: "",
  source: "高手来挪车",
  commentDisable: "OFF",
  callToActionButtons: ["开始游戏", "点击即玩"],
  productName: "高手来挪车",
  sellingPoints: ["无限下载，点击即玩"],
};

const defaultCreativeConfig = {
  groupCount: 1,
  videoCount: 3,
  imageCount: 0,
  titleCount: 0,
  groupName: "创意组01",
  dynamicCreativeSwitch: "ON",
  videoHpVisibility: "HIDE_VIDEO_ON_HP",
  videoIds: [
    "v02033g10000d02tps7og65pa4vcrck0",
    "v02033g10000d02tps7og65rslv6ln00",
    "v03033g10000d02tpsfog65guf364780",
  ],
  videoCoverIds: [
    "tos-cn-i-sd07hgqsbj/af2e62edb8d24c1798c0e8ae105b429c",
    "tos-cn-i-sd07hgqsbj/9a5b6de6c04c4be0bf5c8afa0ac3a769",
    "tos-cn-i-sd07hgqsbj/8cc21ddc37f146479dc7b3170447d6bb",
  ],
  titles: [],
  titleWordLists: ["4", "4", "4322", "5126", "5127"],
  externalUrls: [
    "https://www.chengzijianzhan.com/tetris/page/7483704561821810698/?projectid=__PROJECT_ID__&promotionid=__PROMOTION_ID__&creativetype=__CTYPE__&clickid=__CLICKID__&mid1=__MID1__&mid2=__MID2__&mid3=__MID3__&mid4=__MID4__&mid5=__MID5__",
    "https://www.chengzijianzhan.com/tetris/page/7483698627279175706/?projectid=__PROJECT_ID__&promotionid=__PROMOTION_ID__&creativetype=__CTYPE__&clickid=__CLICKID__&mid1=__MID1__&mid2=__MID2__&mid3=__MID3__&mid4=__MID4__&mid5=__MID5__",
    "https://www.chengzijianzhan.com/tetris/page/7483701366656466995/?projectid=__PROJECT_ID__&promotionid=__PROMOTION_ID__&creativetype=__CTYPE__&clickid=__CLICKID__&mid1=__MID1__&mid2=__MID2__&mid3=__MID3__&mid4=__MID4__&mid5=__MID5__",
  ],
  productImageIds: [
    "tos-cn-i-sd07hgqsbj/723915d512ab4be68a3169c0bbb8befd",
    "tos-cn-i-sd07hgqsbj/af012c8a07604e45b0d1268427bfbe0a",
    "tos-cn-i-sd07hgqsbj/8abc7b0d416e4467bc9e26ed8820e87a",
  ],
};

let creativeConfig = Object.assign({}, defaultCreativeConfig);
let localVideoPool = [];

const defaultTitlePackTitles = [
  "{地点}人爱的游戏，没wifi也能玩一整天！",
  "这么难！到底{地点}是谁在过关啊？",
  "闺蜜说我人菜瘾大？截图为证！今天必须锤进{省份}TOP10！",
  "{反性别-夫妻}说我人菜瘾大？截图为证！今天必须锤进排行榜TOP10！",
  "{月份}超火爆小游戏！玩了5分钟就入迷了,太刺激了！",
];

const defaultTitlePackConfig = {
  pickMode: "MANUAL",
  source: "TITLE_PACK",
  distribution: "REUSE",
  titlePerPromotion: 5,
  name: "高手来挪车标题包",
  keyword: "",
  accountScope: "ALL",
  titles: defaultTitlePackTitles.slice(),
  titleWordLists: defaultCreativeConfig.titleWordLists.slice(),
};

let titlePackConfig = Object.assign({}, defaultTitlePackConfig);

const defaultLandingConfig = {
  perPromotion: 1,
  type: "ORANGE",
  distribution: "SAME",
  onlyDeliverable: "ON",
  keyword: "",
  urls: defaultCreativeConfig.externalUrls.slice(),
  names: ["闯关奇才-3", "闯关奇才-1", "闯关奇才-2"],
  selectedUrls: defaultCreativeConfig.externalUrls.slice(),
};

let landingConfig = Object.assign({}, defaultLandingConfig);

try {
  const savedProjectConfig = localStorage.getItem("oceanengineProjectConfig");
  if (savedProjectConfig) {
    projectConfig = Object.assign(projectConfig, JSON.parse(savedProjectConfig));
  }
} catch (error) {
  console.warn("项目配置读取失败", error);
}
if (projectConfig.bidStrategy !== "NO_BID") {
  projectConfig.budgetOptimizeSwitch = "OFF";
}

try {
  const savedAdInfoConfig = localStorage.getItem("oceanengineAdInfoConfig");
  if (savedAdInfoConfig) {
    adInfoConfig = Object.assign(adInfoConfig, JSON.parse(savedAdInfoConfig));
  }
} catch (error) {
  console.warn("广告信息配置读取失败", error);
}
if (!Array.isArray(adInfoConfig.sellingPoints)) {
  adInfoConfig.sellingPoints = adInfoConfig.sellingPoint ? [adInfoConfig.sellingPoint] : [];
}
adInfoConfig.callToActionButtons = Array.isArray(adInfoConfig.callToActionButtons)
  ? adInfoConfig.callToActionButtons.slice(0, 10)
  : ["开始游戏", "点击即玩"];
adInfoConfig.sellingPoints = adInfoConfig.sellingPoints.slice(0, 10);

try {
  const savedCreativeConfig = localStorage.getItem("oceanengineCreativeConfig");
  if (savedCreativeConfig) {
    creativeConfig = Object.assign({}, defaultCreativeConfig, JSON.parse(savedCreativeConfig));
  }
} catch (error) {
  console.warn("创意素材配置读取失败", error);
}

try {
  const savedTitlePackConfig = localStorage.getItem("oceanengineTitlePackConfig");
  if (savedTitlePackConfig) {
    titlePackConfig = Object.assign({}, defaultTitlePackConfig, JSON.parse(savedTitlePackConfig));
  }
} catch (error) {
  console.warn("标题包配置读取失败", error);
}

try {
  const savedLandingConfig = localStorage.getItem("oceanengineLandingConfig");
  if (savedLandingConfig) {
    landingConfig = Object.assign({}, defaultLandingConfig, JSON.parse(savedLandingConfig));
  }
} catch (error) {
  console.warn("落地页配置读取失败", error);
}

function syncState() {
  const fallbackCount = account.value.trim().length > 0 ? 1 : 0;
  estimate.textContent = String(selectedAdvertisers.length || fallbackCount);
  budgetInput.value = projectConfig.budget;
  renderProjectSummary();
  renderCreativeSummary();
  renderTitlePackSummary();
  renderLandingSummary();
}

function statusText(value) {
  return value === "ENABLE" ? "开启" : "暂停";
}

function renderProjectSummary() {
  if (projectSummary) {
    projectSummary.innerHTML = `
      <strong>${escapeHtml(projectConfig.projectName)}</strong>
      <span>预算 ${escapeHtml(projectConfig.budget)} 元/日 · ${escapeHtml(statusText(projectConfig.projectStatus))}</span>
      <span>${escapeHtml(projectLandingTypeText(projectConfig.landingType))} · ${escapeHtml(deliveryProductText(projectConfig.deliveryProduct))} · ${escapeHtml(externalActionText(projectConfig.externalAction))}</span>
    `;
  }
  if (adInfoSummary) {
    adInfoSummary.innerHTML = `
      <p>广告名称：${escapeHtml(adInfoConfig.name)}</p>
      <p>产品名称：${escapeHtml(adInfoConfig.productName)}</p>
      <p>抖音号：${escapeHtml(adInfoConfig.awemeName || adInfoConfig.awemeId || "--")}</p>
      <p>行动号召：${escapeHtml((adInfoConfig.callToActionButtons || []).length)} 个 / 卖点：${escapeHtml((adInfoConfig.sellingPoints || []).length)} 个</p>
      <p>来源：${escapeHtml(adInfoConfig.source)}</p>
      <p>广告默认状态：${escapeHtml(statusText(adInfoConfig.status))}</p>
    `;
  }
}

function projectLandingTypeText(value) {
  const map = {
    MICRO_GAME: "小程序",
    APP: "应用推广",
    LEADS: "销售线索",
  };
  return map[value] || "小程序";
}

function deliveryProductText(value) {
  const map = {
    WECHAT_GAME: "微信小游戏",
    WECHAT_APP: "微信小程序",
    BYTE_GAME: "字节小游戏",
    BYTE_APP: "字节小程序",
    AWEME: "抖音号",
  };
  return map[value] || "微信小游戏";
}

function externalActionText(value) {
  const map = {
    AD_CONVERT_TYPE_GAME_ADDICTION: "关键行为",
    AD_CONVERT_TYPE_ACTIVE: "激活",
    AD_CONVERT_TYPE_PAY: "付费",
  };
  return map[value] || "关键行为";
}

function selectedTargetAges() {
  if (targetAgeUnlimited && targetAgeUnlimited.checked) return [];
  return Array.from(document.querySelectorAll('input[name="targetAge"]:checked')).map((item) => item.value);
}

function setTargetAges(values) {
  const selected = new Set(Array.isArray(values) ? values : []);
  if (targetAgeUnlimited) targetAgeUnlimited.checked = !selected.size;
  document.querySelectorAll('input[name="targetAge"]').forEach((input) => {
    input.checked = selected.has(input.value);
  });
}

function parseNumericList(value) {
  return String(value || "")
    .split(/[\s,，;；]+/)
    .map((item) => Number(item.trim()))
    .filter((item) => Number.isFinite(item));
}

function selectedTargetCities() {
  return Array.from(selectedTargetCityIds).filter((item) => Number.isFinite(item));
}

function renderTargetRegionSummary() {
  const count = selectedTargetCities().length;
  if (targetRegionSummary) {
    targetRegionSummary.textContent = count ? `已选：${count} 个行政区域` : "已选：不限";
  }
}

function renderTargetRegions() {
  if (!targetProvinceList || !targetCityList) return;
  const keyword = (targetRegionSearch && targetRegionSearch.value || "").trim().toLowerCase();
  const selectedCities = selectedTargetCityIds;
  const provinces = TARGET_REGIONS.filter((province) => {
    if (!keyword) return true;
    return province.name.toLowerCase().includes(keyword) ||
      province.cities.some((city) => city.name.toLowerCase().includes(keyword));
  });
  if (!provinces.some((province) => province.id === activeTargetProvinceId)) {
    activeTargetProvinceId = (provinces[0] || TARGET_REGIONS[0]).id;
  }
  const unlimitedRow = `
    <div class="region-province-row region-unlimited-row ${selectedCities.size ? "" : "is-active"}">
      <label class="region-check">
        <input type="checkbox" data-target-region-unlimited ${selectedCities.size ? "" : "checked"}>
        <span>不限地域</span>
      </label>
    </div>
  `;
  targetProvinceList.innerHTML = unlimitedRow + provinces.map((province) => {
    const checkedCount = province.cities.filter((city) => selectedCities.has(city.id)).length;
    const allChecked = province.cities.length > 0 && checkedCount === province.cities.length;
    return `
      <div class="region-province-row ${province.id === activeTargetProvinceId ? "is-active" : ""}">
        <label class="region-check">
          <input type="checkbox" data-target-province-check="${province.id}" ${allChecked ? "checked" : ""}>
          <span>${escapeHtml(province.name)}</span>
        </label>
        <small>${checkedCount ? `${checkedCount}/${province.cities.length}` : ""}</small>
        <button type="button" aria-label="${escapeHtml(province.name)}" data-target-province="${province.id}">›</button>
      </div>
    `;
  }).join("");
  const activeProvince = TARGET_REGIONS.find((province) => province.id === activeTargetProvinceId) || TARGET_REGIONS[0];
  const cities = activeProvince.cities.filter((city) => !keyword || city.name.toLowerCase().includes(keyword) || activeProvince.name.toLowerCase().includes(keyword));
  const allChecked = cities.length > 0 && cities.every((city) => selectedCities.has(city.id));
  const someChecked = cities.some((city) => selectedCities.has(city.id));
  targetCityList.innerHTML = `
    <label class="region-check region-check-all">
      <input type="checkbox" data-target-city-all="${activeProvince.id}" ${allChecked ? "checked" : ""}>
      <span>全选${escapeHtml(activeProvince.name)}</span>
    </label>
    ${cities.map((city) => `
      <label class="region-check">
        <input type="checkbox" name="targetCity" value="${city.id}" ${selectedCities.has(city.id) ? "checked" : ""}>
        <span>${escapeHtml(city.name)}</span>
      </label>
    `).join("")}
  `;
  targetProvinceList.querySelectorAll("[data-target-province-check]").forEach((input) => {
    const province = TARGET_REGIONS.find((item) => item.id === Number(input.dataset.targetProvinceCheck));
    const checkedCount = (province ? province.cities : []).filter((city) => selectedCities.has(city.id)).length;
    input.indeterminate = checkedCount > 0 && checkedCount < (province ? province.cities.length : 0);
  });
  const cityAll = targetCityList.querySelector("[data-target-city-all]");
  if (cityAll) cityAll.indeterminate = someChecked && !allChecked;
  renderTargetRegionSummary();
}

function setTargetCities(values) {
  selectedTargetCityIds = new Set((Array.isArray(values) ? values : [])
    .map(Number)
    .filter((item) => Number.isFinite(item)));
  renderTargetRegions();
}

function bidStrategyText(value) {
  return value === "NO_BID" ? "最大转化" : "稳定成本-常规版";
}

function renderCreativeSummary() {
  if (creativeCount) {
    creativeCount.textContent = `已选创意组：${creativeConfig.groupCount || 0}/500`;
  }
  if (!creativeSummary) return;

  const hasMaterials = (creativeConfig.videoIds && creativeConfig.videoIds.length) ||
    selectedLocalVideos().length;
  if (!hasMaterials) {
    creativeSummary.classList.add("empty-state");
    creativeSummary.classList.remove("material-summary");
    creativeSummary.innerHTML = `
      <div class="doc-icon" aria-hidden="true"><span></span></div>
      <p>暂无创意素材</p>
    `;
    return;
  }

  creativeSummary.classList.remove("empty-state");
  creativeSummary.classList.add("material-summary");
  const unitCount = Number(creativeConfig.groupCount || 1);
  const perUnitVideoCount = Number(creativeConfig.videoCount || selectedLocalVideos().length || (creativeConfig.videoIds || []).length || 0);
  creativeSummary.innerHTML = `
    <strong>${escapeHtml(creativeConfig.groupName || "创意组01")}</strong>
    <p>视频 ${escapeHtml(selectedLocalVideos().length || (creativeConfig.videoIds || []).length)} 个</p>
    <p>本地视频 ${escapeHtml(selectedLocalVideos().length)} 个 / 手动视频 ID ${escapeHtml((creativeConfig.videoIds || []).length)} 个</p>
    <p>动态创意：${escapeHtml(creativeConfig.dynamicCreativeSwitch === "OFF" ? "不启用" : "启用")}</p>
  `;
}

function renderTitlePackSummary() {
  const count = (titlePackConfig.titles || []).length;
  if (titlePackCount) {
    titlePackCount.textContent = `已选：${count}/200`;
  }
  if (!titlePackSummary) return;

  if (!count) {
    titlePackSummary.classList.remove("material-summary");
    titlePackSummary.classList.add("empty-text");
    titlePackSummary.textContent = "暂无";
    return;
  }

  titlePackSummary.classList.remove("empty-text");
  titlePackSummary.classList.add("material-summary", "compact-summary");
  const preview = (titlePackConfig.titles || []).slice(0, 3).map((item) => `<p>${escapeHtml(item)}</p>`).join("");
  titlePackSummary.innerHTML = `
    <strong>${escapeHtml(titlePackConfig.name || "标题包")}</strong>
    <p>${escapeHtml(titlePackSourceText(titlePackConfig.source))} · ${escapeHtml(titleDistributionText(titlePackConfig.distribution))}</p>
    ${preview}
  `;
}

function titlePackSourceText(value) {
  if (value === "TITLE_LIBRARY") return "标题库";
  if (value === "MATERIAL_NAME") return "素材名作为标题";
  return "标题包";
}

function titleDistributionText(value) {
  if (value === "AVERAGE") return "平均分配";
  if (value === "BY_ACCOUNT") return "分账户选择";
  return "全账户复用";
}

function renderLandingSummary() {
  const count = (landingConfig.urls || []).length;
  if (landingCount) {
    landingCount.textContent = `已选：${count}/${landingConfig.perPromotion || 1}`;
  }
  if (!landingSummary) return;

  if (!count) {
    landingSummary.classList.remove("material-summary");
    landingSummary.classList.add("empty-text");
    landingSummary.textContent = "暂无";
    return;
  }

  landingSummary.classList.remove("empty-text");
  landingSummary.classList.add("material-summary", "compact-summary");
  const firstName = (landingConfig.names || [])[0] || "落地页";
  landingSummary.innerHTML = `
    <strong>${escapeHtml(firstName)}</strong>
    <p>${escapeHtml(landingAssetTypeText(landingConfig.type))} · ${escapeHtml(landingDistributionText(landingConfig.distribution))}</p>
    <p>${escapeHtml((landingConfig.urls || [])[0])}</p>
  `;
}

function landingAssetTypeText(value) {
  const map = {
    ORANGE: "橙子落地页",
    ORANGE_TEMPLATE: "橙子建站模板",
    CL_TEMPLATE: "创量落地页模板",
    THIRD_PARTY: "第三方落地页",
    DYNAMIC_LINK: "动态链接生成",
    MANUAL: "手动填写",
    PRODUCT_LIBRARY: "商品库链接",
  };
  return map[value] || "橙子落地页";
}

function landingDistributionText(value) {
  const map = {
    SAME: "全部相同",
    ACCOUNT: "按账户分配",
    PROJECT: "按项目分配",
    PROMOTION: "按广告分配",
  };
  return map[value] || "全部相同";
}

function landingSelectionLimit() {
  const perPromotion = Math.max(1, Number(landingPerPromotion && landingPerPromotion.value || landingConfig.perPromotion || 1));
  const distribution = getRadioValue("landingDistribution") || landingConfig.distribution || "SAME";
  if (distribution === "PROMOTION") {
    return perPromotion * Math.max(1, Number(creativeConfig.groupCount || 1));
  }
  if (distribution === "ACCOUNT" || distribution === "PROJECT") {
    return perPromotion * Math.max(1, selectedAdvertisers.length || 1);
  }
  return perPromotion;
}

function updateLandingEstimate() {
  if (!landingEstimate) return;
  const selectedCount = Array.isArray(landingConfig.selectedUrls) ? landingConfig.selectedUrls.length : 0;
  landingEstimate.textContent = `已选：${selectedCount}/${landingSelectionLimit()}`;
}

function setResultLoading() {
  const accountCount = selectedAdvertisers.length || 1;
  resultPanel.classList.add("has-result");
  resultPanel.innerHTML = `
    <h2>正在创建</h2>
    <div class="result-card">
      <div><span>执行步骤</span><strong>创建项目 → 暂停项目 → 创建单元 → 暂停单元</strong></div>
      <div><span>媒体账户</span><strong>${accountCount} 个</strong></div>
      <div><span>预算</span><strong>${budgetInput.value || 300} 元/日</strong></div>
      <div><span>状态</span><strong>请求中...</strong></div>
    </div>
  `;
}

function setResultSuccess(data) {
  resultPanel.classList.add("has-result");
  if (data && Array.isArray(data.results)) {
    const rows = data.results.map((item) => {
      const ok = item.code === 0;
      const note = ok ? (item.projectName || "--") : (item.message || "--");
      return `
        <tr>
          <td>${escapeHtml(item.advertiserId)}</td>
          <td>${ok ? "成功" : "失败"}</td>
          <td>${escapeHtml(item.projectId || "--")}</td>
          <td>${escapeHtml(item.promotionId || "--")}</td>
          <td title="${escapeHtml(note)}">${escapeHtml(note)}</td>
        </tr>
      `;
    }).join("");
    const title = data.failureCount
      ? (data.successCount ? "批量创建完成（部分失败）" : "批量创建失败")
      : "批量创建成功";
    resultPanel.innerHTML = `
      <h2>${title}</h2>
      <div class="result-card">
        <div><span>总账号</span><strong>${escapeHtml(data.total || data.results.length)}</strong></div>
        <div><span>成功</span><strong>${escapeHtml(data.successCount || 0)}</strong></div>
        <div><span>失败</span><strong>${escapeHtml(data.failureCount || 0)}</strong></div>
        <div><span>预算</span><strong>${escapeHtml(data.budget || projectConfig.budget)} 元/日</strong></div>
      </div>
      <table class="batch-result-table">
        <thead>
          <tr>
            <th>广告主 ID</th>
            <th>结果</th>
            <th>项目 ID</th>
            <th>单元 ID</th>
            <th>说明</th>
          </tr>
        </thead>
        <tbody>${rows}</tbody>
      </table>
    `;
    return;
  }
  resultPanel.innerHTML = `
    <h2>创建成功</h2>
    <div class="result-card">
      <div><span>项目 ID</span><strong>${data.projectId}</strong></div>
      <div><span>项目名称</span><strong>${data.projectName}</strong></div>
      <div><span>项目状态</span><strong>${data.projectStatus}</strong></div>
      <div><span>广告单元 ID</span><strong>${data.promotionId}</strong></div>
      <div><span>广告单元名称</span><strong>${data.promotionName}</strong></div>
      <div><span>广告单元状态</span><strong>${data.promotionStatus}</strong></div>
      <div><span>预算</span><strong>${data.budget} 元/日</strong></div>
    </div>
  `;
}

function setResultError(message) {
  resultPanel.classList.add("has-result");
  resultPanel.innerHTML = `
    <h2>创建失败</h2>
    <div class="result-card">
      <div><span>错误信息</span><strong class="error-text">${message}</strong></div>
    </div>
  `;
}

async function createOne() {
  if (!location.protocol.startsWith("http")) {
    setResultError("请通过 http://localhost:5173 打开页面，file:// 无法调用本地接口。");
    return;
  }
  if (!readOceanAuth().accessToken) {
    setResultError("请先完成巨量引擎授权。");
    openAuthDialog();
    return;
  }

  const budget = Number(budgetInput.value || 300);
  if (!Number.isFinite(budget) || budget < 300) {
    setResultError("项目预算最低为 300 元/日。");
    return;
  }
  if (!selectedAdvertisers.length) {
    setResultError("请先选择至少 1 个媒体账户，最多可同时选择 20 个。");
    return;
  }
  projectConfig.budget = budget;

  const projectNameForCreate = projectRandomSuffix.checked
    ? `${projectConfig.projectName}-${Date.now().toString().slice(-4)}`
    : projectConfig.projectName;
  const promotionNameForCreate = promotionRandomSuffix.checked
    ? `${adInfoConfig.name}-${Date.now().toString().slice(-4)}`
    : adInfoConfig.name;

  createButton.disabled = true;
  createButton.textContent = "创建中...";
  setResultLoading();

  try {
    const localVideos = selectedLocalVideos();
    const payload = {
      budget: projectConfig.budget,
      cpaBid: projectConfig.cpaBid,
      projectName: projectNameForCreate,
      projectStatus: projectConfig.projectStatus,
      startDate: projectConfig.startDate,
      endDate: projectConfig.endDate,
      projectContent: {
        landingType: projectConfig.landingType,
        adType: projectConfig.adType,
        deliveryType: projectConfig.deliveryType,
        deliveryMode: projectConfig.deliveryMode,
        marketingGoal: projectConfig.marketingGoal,
        relatedTask: projectConfig.relatedTask,
        deliveryProduct: projectConfig.deliveryProduct,
        externalAction: projectConfig.externalAction,
        deepExternalAction: projectConfig.deepExternalAction,
        microMatchMode: projectConfig.microMatchMode,
        workbenchVersion: projectConfig.workbenchVersion,
        microAppInstanceId: projectConfig.microAppInstanceId,
        inventoryCatalog: projectConfig.inventoryCatalog,
        audienceSource: projectConfig.audienceSource,
        targeting: projectConfig.targeting,
        budgetConfigMode: projectConfig.budgetConfigMode,
        scheduleType: projectConfig.scheduleType,
        scheduleTimeMode: projectConfig.scheduleTimeMode,
        bidStrategy: projectConfig.bidStrategy,
        budgetMode: projectConfig.budgetMode,
        pricing: projectConfig.pricing,
        budgetOptimizeSwitch: projectConfig.budgetOptimizeSwitch,
        bidBudgetMode: projectConfig.bidBudgetMode,
      },
      promotion: Object.assign({}, adInfoConfig, {
        name: promotionNameForCreate,
      }),
      creative: Object.assign({}, creativeConfig, {
        videoSource: localVideos.length ? "LOCAL_UPLOAD" : "MANUAL_ID",
      }),
      titlePack: titlePackConfig,
      landing: landingConfig,
      nameSuffix: projectRandomSuffix.checked ? undefined : "复制",
      advertiserIds: selectedAdvertisers.map((item) => item.advertiser_id),
    };

    let response;
    if (localVideos.length) {
      const formData = new FormData();
      formData.append("payload", JSON.stringify(payload));
      localVideos.forEach((file) => formData.append("localVideos", file, file.name));
      response = await apiFetch("/api/clone-one", {
        method: "POST",
        body: formData,
      });
    } else {
      response = await apiFetch("/api/clone-one", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    }
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "接口返回异常");
    }
    setResultSuccess(result.data);
  } catch (error) {
    setResultError(error.message);
  } finally {
    createButton.disabled = false;
    createButton.textContent = "执行创建";
  }
}

account.addEventListener("input", syncState);
createButton.addEventListener("click", createOne);
syncState();

async function loadOceanengineConfig() {
  if (!location.protocol.startsWith("http")) return;

  try {
    const response = await apiFetch("/api/config");
    const config = await response.json();
    account.placeholder = `广告主 ${config.advertiserId}`;
    ruleText.title = `样例项目 ID：${config.sourceProjectId}`;
  } catch (error) {
    console.warn("配置读取失败", error);
  }
}

loadOceanengineConfig();

function escapeHtml(value) {
  return String(value == null ? "" : value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function normalizeAdvertiser(item) {
  return {
    advertiser_id: String(item.advertiser_id || item.account_id || ""),
    advertiser_name: item.advertiser_name || item.account_name || "--",
    company_name: item.company_name || item.company || item.parent_organization_name || (item.company_list && item.company_list[0]) || "--",
    role: item.account_role || item.account_type || item.advertiser_role || "--",
    create_project: item.create_project || "--",
    is_valid: item.is_valid !== false,
  };
}

function splitSearchTerms(value) {
  return String(value || "")
    .split(/[\s,，;；]+/)
    .map((item) => item.trim().toLowerCase())
    .filter(Boolean);
}

function resizeAccountSearch() {
  if (!accountSearch) return;
  accountSearch.style.height = "24px";
  accountSearch.style.height = `${Math.min(92, Math.max(24, accountSearch.scrollHeight))}px`;
}

function filteredAdvertisers() {
  const terms = splitSearchTerms(accountSearch.value);
  if (!terms.length) return advertisers;
  const onlyIds = terms.every((term) => /^\d+$/.test(term));
  const matched = advertisers.filter((item) => {
    return terms.some((term) => {
      if (onlyIds) return item.advertiser_id === term || item.advertiser_id.includes(term);
      return item.advertiser_id.toLowerCase().includes(term) ||
        item.advertiser_name.toLowerCase().includes(term) ||
        item.company_name.toLowerCase().includes(term);
    });
  });
  if (!onlyIds) return matched;
  const order = new Map(terms.map((term, index) => [term, index]));
  return matched.sort((a, b) => {
    const aIndex = terms.findIndex((term) => a.advertiser_id === term || a.advertiser_id.includes(term));
    const bIndex = terms.findIndex((term) => b.advertiser_id === term || b.advertiser_id.includes(term));
    return (aIndex === -1 ? order.size : aIndex) - (bIndex === -1 ? order.size : bIndex);
  });
}

function primarySelectedAdvertiser() {
  return selectedAdvertisers[0] || null;
}

function isAdvertiserSelected(advertiserId) {
  return selectedAdvertisers.some((item) => item.advertiser_id === advertiserId);
}

function toggleAdvertiserSelection(advertiser) {
  if (!advertiser) return;
  const index = selectedAdvertisers.findIndex((item) => item.advertiser_id === advertiser.advertiser_id);
  if (index >= 0) {
    selectedAdvertisers.splice(index, 1);
    return;
  }
  if (selectedAdvertisers.length >= MAX_SELECTED_ADVERTISERS) {
    alert(`最多可同时选择 ${MAX_SELECTED_ADVERTISERS} 个媒体账户`);
    return;
  }
  selectedAdvertisers.push(advertiser);
}

function renderSelectedAccount() {
  selectedAccountCount.textContent = String(selectedAdvertisers.length);
  if (!selectedAdvertisers.length) {
    selectedAccountName.textContent = "暂无";
  } else {
    selectedAccountName.innerHTML = selectedAdvertisers.map((item) => `
      <span class="selected-account-item">${escapeHtml(item.advertiser_name)} / ${escapeHtml(item.advertiser_id)}</span>
    `).join("");
  }
  confirmAccount.classList.toggle("is-ready", Boolean(selectedAdvertisers.length));
}

function renderAdvertisers() {
  const list = filteredAdvertisers();
  accountPageInfo.textContent = `共 ${list.length} 条`;
  if (!list.length) {
    accountRows.innerHTML = `<tr><td colspan="6" class="table-empty">暂无可选媒体账户</td></tr>`;
    renderSelectedAccount();
    return;
  }

  accountRows.innerHTML = list.map((item) => {
    const selected = isAdvertiserSelected(item.advertiser_id);
    return `
      <tr class="${selected ? "is-selected" : ""}" data-advertiser-id="${escapeHtml(item.advertiser_id)}">
        <td><input type="checkbox" ${selected ? "checked" : ""} aria-label="选择媒体账户"></td>
        <td>
          <strong>${escapeHtml(item.advertiser_name)}</strong>
          <span class="sub-id">ID：${escapeHtml(item.advertiser_id)}</span>
        </td>
        <td>${escapeHtml(item.company_name)}</td>
        <td>--</td>
        <td>${escapeHtml(item.role)}</td>
        <td>${escapeHtml(item.create_project)}</td>
      </tr>
    `;
  }).join("");
  renderSelectedAccount();
}

async function loadAdvertisers() {
  accountRows.innerHTML = `<tr><td colspan="6" class="table-empty">加载中...</td></tr>`;
  accountWarning.textContent = "";
  try {
    const response = await apiFetch("/api/advertisers");
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "账号列表加载失败");
    }
    if (result.warnings && result.warnings.length) {
      accountWarning.textContent = `子账号列表权限不足：请重新授权并勾选 ${result.warnings[0].api}`;
    }
    const selectedIds = new Set(selectedAdvertisers.map((item) => item.advertiser_id));
    advertisers = (result.data && result.data.list ? result.data.list : []).map(normalizeAdvertiser);
    selectedAdvertisers = Array.from(selectedIds)
      .map((advertiserId) => advertisers.find((item) => item.advertiser_id === advertiserId))
      .filter(Boolean)
      .slice(0, MAX_SELECTED_ADVERTISERS);
    if (!selectedAdvertisers.length && advertisers.length === 1) {
      selectedAdvertisers = [advertisers[0]];
    }
    renderAdvertisers();
  } catch (error) {
    accountRows.innerHTML = `<tr><td colspan="6" class="table-empty">${escapeHtml(error.message)}</td></tr>`;
  }
}

function openAccountModal(event) {
  event.preventDefault();
  accountModal.classList.add("is-open");
  accountModal.setAttribute("aria-hidden", "false");
  loadAdvertisers();
}

function closeModal() {
  accountModal.classList.remove("is-open");
  accountModal.setAttribute("aria-hidden", "true");
}

function confirmSelectedAccount() {
  if (!selectedAdvertisers.length) return;
  if (selectedAdvertisers.length === 1) {
    account.value = `广告主 ${selectedAdvertisers[0].advertiser_id}`;
  } else {
    account.value = `已选 ${selectedAdvertisers.length} 个媒体账户`;
  }
  account.title = selectedAdvertisers
    .map((item) => `${item.advertiser_name} / ${item.advertiser_id}`)
    .join("\n");
  syncState();
  closeModal();
}

function openProjectModal() {
  projectBudget.value = projectConfig.budget;
  projectCpaBid.value = projectConfig.cpaBid;
  projectName.value = projectConfig.projectName;
  projectStatus.value = projectConfig.projectStatus;
  projectStartDate.value = projectConfig.startDate;
  projectEndDate.value = projectConfig.endDate;
  setRadioValue("landingType", projectConfig.landingType || "MICRO_GAME");
  projectAdType.value = projectConfig.adType || "ALL";
  projectDeliveryType.value = projectConfig.deliveryType || "NORMAL";
  projectDeliveryMode.value = projectConfig.deliveryMode || "PROCEDURAL";
  projectMarketingGoal.value = projectConfig.marketingGoal || "VIDEO_AND_IMAGE";
  setRadioValue("relatedTask", projectConfig.relatedTask || "OFF");
  setRadioValue("deliveryProduct", projectConfig.deliveryProduct || "WECHAT_GAME");
  setRadioValue("microMatchMode", projectConfig.microMatchMode || "ACCOUNT");
  setRadioValue("workbenchVersion", projectConfig.workbenchVersion || "OLD");
  setRadioValue("budgetConfigMode", projectConfig.budgetConfigMode || "UNIFIED");
  setRadioValue("scheduleType", projectConfig.scheduleType || "SCHEDULE_FROM_NOW");
  setRadioValue("scheduleTimeMode", projectConfig.scheduleTimeMode || "ALL");
  setRadioValue("bidStrategy", projectConfig.bidStrategy || "CUSTOM");
  setRadioValue("budgetMode", projectConfig.budgetMode || "BUDGET_MODE_DAY");
  setRadioValue("pricing", projectConfig.pricing || "PRICING_OCPM");
  setRadioValue("budgetOptimizeSwitch", projectConfig.budgetOptimizeSwitch || "OFF");
  setRadioValue("bidBudgetMode", projectConfig.bidBudgetMode || "UNIFIED");
  updateBidStrategyPreview();
  projectExternalAction.value = projectConfig.externalAction || "AD_CONVERT_TYPE_GAME_ADDICTION";
  projectDeepExternalAction.value = projectConfig.deepExternalAction || "";
  microAppInstanceId.value = projectConfig.microAppInstanceId || "1827014283265305";
  projectInventory.value = projectConfig.inventoryCatalog || "UNIVERSAL_SMART";
  projectAudienceSource.value = projectConfig.audienceSource || "NONE";
  const targeting = projectConfig.targeting || {};
  targetGender.value = targeting.gender || "NONE";
  targetLocationType.value = targeting.locationType || "CURRENT";
  setTargetAges(targeting.age || []);
  renderTargetRegions();
  setTargetCities(targeting.city || []);
  projectModal.classList.add("is-open");
  projectModal.setAttribute("aria-hidden", "false");
}

function closeProjectDialog() {
  projectModal.classList.remove("is-open");
  projectModal.setAttribute("aria-hidden", "true");
}

function saveProjectDialog() {
  const budget = Number(projectBudget.value || 300);
  const cpaBid = Number(projectCpaBid.value || 1.34);
  if (!Number.isFinite(budget) || budget < 300) {
    alert("项目预算最低为 300 元/日");
    return;
  }
  if (!Number.isFinite(cpaBid) || cpaBid <= 0) {
    alert("出价必须大于 0");
    return;
  }
  projectConfig = {
    budget,
    cpaBid,
    projectName: projectName.value.trim() || "0421-高手来挪车-1-复制",
    projectStatus: projectStatus.value,
    startDate: projectStartDate.value || "2026-06-02",
    endDate: projectEndDate.value || "2035-04-21",
    landingType: getRadioValue("landingType") || "MICRO_GAME",
    adType: projectAdType.value || "ALL",
    deliveryType: projectDeliveryType.value || "NORMAL",
    deliveryMode: projectDeliveryMode.value || "PROCEDURAL",
    marketingGoal: projectMarketingGoal.value || "VIDEO_AND_IMAGE",
    relatedTask: getRadioValue("relatedTask") || "OFF",
    deliveryProduct: getRadioValue("deliveryProduct") || "WECHAT_GAME",
    externalAction: projectExternalAction.value || "AD_CONVERT_TYPE_GAME_ADDICTION",
    deepExternalAction: projectDeepExternalAction.value || "",
    microMatchMode: getRadioValue("microMatchMode") || "ACCOUNT",
    workbenchVersion: getRadioValue("workbenchVersion") || "OLD",
    microAppInstanceId: microAppInstanceId.value.trim() || "1827014283265305",
    inventoryCatalog: projectInventory.value || "UNIVERSAL_SMART",
    audienceSource: projectAudienceSource.value || "NONE",
    targeting: {
      age: selectedTargetAges(),
      gender: targetGender.value || "NONE",
      city: selectedTargetCities(),
      locationType: targetLocationType.value || "CURRENT",
    },
    budgetConfigMode: getRadioValue("budgetConfigMode") || "UNIFIED",
    scheduleType: getRadioValue("scheduleType") || "SCHEDULE_FROM_NOW",
    scheduleTimeMode: getRadioValue("scheduleTimeMode") || "ALL",
    bidStrategy: getRadioValue("bidStrategy") || "CUSTOM",
    budgetMode: getRadioValue("budgetMode") || "BUDGET_MODE_DAY",
    pricing: getRadioValue("pricing") || "PRICING_OCPM",
    budgetOptimizeSwitch: getRadioValue("budgetOptimizeSwitch") || "OFF",
    bidBudgetMode: getRadioValue("bidBudgetMode") || "UNIFIED",
  };
  localStorage.setItem("oceanengineProjectConfig", JSON.stringify(projectConfig));
  budgetInput.value = projectConfig.budget;
  renderProjectSummary();
  closeProjectDialog();
}

function currentMiniGameType() {
  return getRadioValue("deliveryProduct") === "BYTE_GAME" ? "BYTE_GAME" : "WECHAT_GAME";
}

function miniGameTypeText(type) {
  return type === "BYTE_GAME" ? "抖音小游戏" : "微信小游戏";
}

function updateMiniGameHeaders() {
  const type = currentMiniGameType();
  const text = miniGameTypeText(type);
  miniGameDialogTitle.textContent = text;
  miniGameHelpText.textContent = `当前可以参与投放的${text}`;
  miniGameIconHead.textContent = text;
  miniGameNameHead.textContent = `${text}名称`;
  miniGameIdHead.textContent = `${text}资产ID`;
  selectWechatGame.textContent = `选择${text}`;
}

function renderMiniGames(errorMessage) {
  if (errorMessage) {
    miniGameRows.innerHTML = `<tr><td colspan="4" class="table-empty">${escapeHtml(errorMessage)}</td></tr>`;
    miniGamePageInfo.textContent = "共 0 条记录";
    miniGameCurrentPage.textContent = String(miniGamePage);
    return;
  }
  if (!miniGames.length) {
    miniGameRows.innerHTML = `<tr><td colspan="4" class="table-empty">暂无可用小游戏</td></tr>`;
    miniGamePageInfo.textContent = "共 0 条记录";
    miniGameCurrentPage.textContent = String(miniGamePage);
    return;
  }
  miniGameRows.innerHTML = miniGames.map((item) => `
    <tr data-instance-id="${escapeHtml(item.instance_id)}">
      <td>
        <div class="mini-game-icon-cell">
          ${item.icon_url ? `<img src="${escapeHtml(item.icon_url)}" alt="">` : `<span>${escapeHtml(item.name.slice(0, 1))}</span>`}
        </div>
      </td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.instance_id)}</td>
      <td><button class="clear-button use-mini-game" type="button">使用</button></td>
    </tr>
  `).join("");
  miniGameCurrentPage.textContent = String(miniGamePage);
}

async function loadMiniGames() {
  if (!location.protocol.startsWith("http")) {
    renderMiniGames("请通过 http://localhost:5173 打开页面后再查询小游戏。");
    return;
  }
  const advertiser = primarySelectedAdvertiser();
  const advertiserId = advertiser ? advertiser.advertiser_id : "";
  if (!advertiserId) {
    renderMiniGames("请先选择媒体账户，再查询该账户有权限的小游戏。");
    return;
  }

  miniGameRows.innerHTML = `<tr><td colspan="4" class="table-empty">加载中...</td></tr>`;
  try {
    const params = new URLSearchParams({
      advertiser_id: advertiserId,
      product_type: currentMiniGameType(),
      keyword: miniGameKeyword.value.trim(),
      page: String(miniGamePage),
      page_size: miniGamePageSize.value,
    });
    const response = await apiFetch(`/api/mini-games?${params.toString()}`);
    const result = await response.json();
    if (!response.ok || (result.code !== 0 && result.code !== 207)) {
      throw new Error(result.message || "小游戏列表加载失败");
    }
    const data = result.data || {};
    miniGames = data.list || [];
    const pageInfo = data.page_info || {};
    miniGameTotalPage = Number(pageInfo.total_page || 1);
    miniGamePageInfo.textContent = `共 ${Number(pageInfo.total_number || miniGames.length)} 条记录`;
    renderMiniGames();
    if (result.errors && result.errors.length && !miniGames.length) {
      renderMiniGames(result.errors.map((item) => `${item.apiPath}: ${item.message || item.code}`).join("；"));
    }
  } catch (error) {
    renderMiniGames(error.message);
  }
}

function openMiniGameModal() {
  updateMiniGameHeaders();
  miniGamePage = 1;
  miniGameModal.classList.add("is-open");
  miniGameModal.setAttribute("aria-hidden", "false");
  loadMiniGames();
}

function closeMiniGameDialog() {
  miniGameModal.classList.remove("is-open");
  miniGameModal.setAttribute("aria-hidden", "true");
}

function useMiniGame(instanceId) {
  const item = miniGames.find((game) => game.instance_id === instanceId);
  if (!item) return;
  microAppInstanceId.value = item.instance_id;
  projectConfig.microAppInstanceId = item.instance_id;
  projectConfig.deliveryProduct = item.product_type;
  setRadioValue("deliveryProduct", item.product_type);
  updateMiniGameHeaders();
  localStorage.setItem("oceanengineProjectConfig", JSON.stringify(Object.assign({}, projectConfig, {
    microAppInstanceId: item.instance_id,
    deliveryProduct: item.product_type,
  })));
  renderProjectSummary();
  closeMiniGameDialog();
}

function getRadioValue(name) {
  const checked = document.querySelector(`input[name="${name}"]:checked`);
  return checked ? checked.value : "";
}

function setRadioValue(name, value) {
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.checked = input.value === value;
    input.closest("label").classList.toggle("is-selected", input.checked);
  });
}

function updateBidStrategyPreview() {
  const strategy = getRadioValue("bidStrategy") || projectConfig.bidStrategy || "CUSTOM";
  const supportsBudgetOptimize = strategy === "NO_BID";
  if (bidStrategyPreview) {
    bidStrategyPreview.textContent = bidStrategyText(strategy);
  }
  if (projectCpaBid) {
    projectCpaBid.disabled = strategy === "NO_BID";
  }
  if (!supportsBudgetOptimize) {
    setRadioValue("budgetOptimizeSwitch", "OFF");
  }
  document.querySelectorAll('input[name="budgetOptimizeSwitch"]').forEach((input) => {
    input.disabled = !supportsBudgetOptimize;
    input.closest("label").classList.toggle("is-disabled", !supportsBudgetOptimize);
  });
}

function openAdInfoModal() {
  adIdentity.value = adInfoConfig.identity || "AWEME";
  awemeSource.value = adInfoConfig.awemeSource || "MANUAL";
  awemeMatchMode.value = adInfoConfig.awemeMatchMode || "ALL";
  awemeAccountId.value = adInfoConfig.awemeId || "";
  awemeAccountName.value = adInfoConfig.awemeName || "";
  callToActionButtons.value = (adInfoConfig.callToActionButtons || []).join("\n");
  adProductName.value = adInfoConfig.productName;
  adSellingPoint.value = (adInfoConfig.sellingPoints || []).join("\n");
  adSource.value = adInfoConfig.source;
  commentDisable.value = adInfoConfig.commentDisable;
  promotionName.value = adInfoConfig.name;
  promotionStatus.value = adInfoConfig.status;
  adInfoModal.classList.add("is-open");
  adInfoModal.setAttribute("aria-hidden", "false");
}

function closeAdInfoDialog() {
  adInfoModal.classList.remove("is-open");
  adInfoModal.setAttribute("aria-hidden", "true");
}

function saveAdInfoDialog() {
  const buttons = splitLimitedList(callToActionButtons.value, 10);
  const sellingPoints = splitLimitedList(adSellingPoint.value, 10);
  adInfoConfig = {
    name: promotionName.value.trim() || "0421-高手来挪车-3-动态-top-16-复制",
    status: promotionStatus.value,
    identity: adIdentity.value,
    awemeSource: awemeSource.value,
    awemeMatchMode: awemeMatchMode.value,
    awemeId: awemeAccountId.value.trim(),
    awemeName: awemeAccountName.value.trim(),
    source: adSource.value.trim() || "高手来挪车",
    commentDisable: commentDisable.value,
    callToActionButtons: buttons.length ? buttons : ["开始游戏", "点击即玩"],
    productName: adProductName.value.trim() || "高手来挪车",
    sellingPoints: sellingPoints.length ? sellingPoints : ["无限下载，点击即玩"],
  };
  localStorage.setItem("oceanengineAdInfoConfig", JSON.stringify(adInfoConfig));
  renderProjectSummary();
  closeAdInfoDialog();
}

function linesFromTextarea(element) {
  return element.value.split(/\r?\n/).map((item) => item.trim()).filter(Boolean);
}

function splitLimitedList(value, limit) {
  return String(value || "")
    .split(/[\r\n,，]+/)
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, limit);
}

function normalizeAwemeAccount(item) {
  const id = item.aweme_id || item.awemeId || item.id || item.uid || item.open_id || item.account_id;
  return {
    id: id == null ? "" : String(id),
    name: item.aweme_name || item.awemeName || item.nickname || item.name || item.account_name || "--",
    status: item.status || item.auth_status || item.aweme_status || item.audit_status || "--",
    raw: item,
  };
}

function filteredAwemeAccounts() {
  const keyword = awemeKeyword.value.trim().toLowerCase();
  if (!keyword) return awemeAccounts;
  return awemeAccounts.filter((item) => (
    item.name.toLowerCase().includes(keyword) ||
    item.id.toLowerCase().includes(keyword)
  ));
}

function renderAwemeAccounts(errorMessage) {
  if (errorMessage) {
    awemeRows.innerHTML = `<tr><td colspan="4" class="table-empty">${escapeHtml(errorMessage)}</td></tr>`;
    awemePageInfo.textContent = "共 0 条记录";
    return;
  }

  const list = filteredAwemeAccounts();
  awemePageInfo.textContent = `共 ${list.length} 条记录`;
  if (!list.length) {
    awemeRows.innerHTML = `<tr><td colspan="4" class="table-empty">当前媒体账户未返回授权抖音号，可手动填写抖音号 ID。</td></tr>`;
    return;
  }

  awemeRows.innerHTML = list.map((item) => `
    <tr>
      <td><strong>${escapeHtml(item.name)}</strong></td>
      <td>${escapeHtml(item.id)}</td>
      <td>${escapeHtml(item.status)}</td>
      <td><button class="link-button" data-aweme-id="${escapeHtml(item.id)}" type="button">使用</button></td>
    </tr>
  `).join("");
}

async function loadAwemeAccounts() {
  const advertiser = primarySelectedAdvertiser();
  if (!advertiser) {
    renderAwemeAccounts("请先选择媒体账户，再选择抖音号。");
    return;
  }

  awemeRows.innerHTML = `<tr><td colspan="4" class="table-empty">加载中...</td></tr>`;
  try {
    const params = new URLSearchParams({
      advertiser_id: advertiser.advertiser_id,
      page: "1",
      page_size: "100",
    });
    const response = await apiFetch(`/api/aweme-accounts?${params.toString()}`);
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "抖音号列表加载失败");
    }
    awemeAccounts = (result.data && result.data.list ? result.data.list : []).map(normalizeAwemeAccount).filter((item) => item.id);
    renderAwemeAccounts();
  } catch (error) {
    awemeAccounts = [];
    renderAwemeAccounts(error.message);
  }
}

function openAwemeModal() {
  awemeModal.classList.add("is-open");
  awemeModal.setAttribute("aria-hidden", "false");
  loadAwemeAccounts();
}

function closeAwemeDialog() {
  awemeModal.classList.remove("is-open");
  awemeModal.setAttribute("aria-hidden", "true");
}

function useAwemeAccount(id) {
  const item = awemeAccounts.find((accountItem) => accountItem.id === id);
  if (!item) return;
  awemeAccountId.value = item.id;
  awemeAccountName.value = item.name;
  adIdentity.value = "AWEME";
  awemeSource.value = "MANUAL";
  closeAwemeDialog();
}

function isVideoFile(file) {
  return file && (file.type.startsWith("video/") || /\.(mp4|mov|m4v|avi|wmv|flv|mkv|webm)$/i.test(file.name));
}

function addLocalVideoFiles(fileList) {
  const existing = new Set(localVideoPool.map((item) => `${item.file.name}:${item.file.size}:${item.file.lastModified}`));
  Array.from(fileList || []).forEach((file) => {
    if (!isVideoFile(file)) return;
    const key = `${file.name}:${file.size}:${file.lastModified}`;
    if (existing.has(key)) return;
    existing.add(key);
    localVideoPool.push({
      id: key,
      file,
      selected: true,
      path: file.webkitRelativePath || file.name,
    });
  });
  renderLocalVideoPool();
  renderCreativeSummary();
}

function selectedLocalVideos() {
  return localVideoPool.filter((item) => item.selected).map((item) => item.file);
}

function formatFileSize(size) {
  if (!Number.isFinite(size)) return "--";
  if (size >= 1024 * 1024 * 1024) return `${(size / 1024 / 1024 / 1024).toFixed(2)} GB`;
  if (size >= 1024 * 1024) return `${(size / 1024 / 1024).toFixed(1)} MB`;
  if (size >= 1024) return `${(size / 1024).toFixed(1)} KB`;
  return `${size} B`;
}

function renderLocalVideoPool() {
  if (!localVideoList || !localVideoStatus) return;
  const selectedCount = localVideoPool.filter((item) => item.selected).length;
  localVideoStatus.textContent = localVideoPool.length
    ? `已导入 ${localVideoPool.length} 个视频，已选择 ${selectedCount} 个；执行创建时上传到所选广告主账户。`
    : "未选择本地视频，默认使用下方视频 ID 或样例视频。";

  if (!localVideoPool.length) {
    localVideoList.innerHTML = `<div class="local-video-empty">可选择多个视频，或选择整个文件夹后随机抽取。</div>`;
    return;
  }

  localVideoList.innerHTML = localVideoPool.map((item) => `
    <label class="local-video-row">
      <input type="checkbox" data-local-video-id="${escapeHtml(item.id)}" ${item.selected ? "checked" : ""}>
      <span>${escapeHtml(item.path)}</span>
      <small>${escapeHtml(formatFileSize(item.file.size))}</small>
    </label>
  `).join("");
}

function randomPickLocalVideos(event) {
  event.preventDefault();
  if (!localVideoPool.length) return;
  const unitCount = Math.max(1, Number(creativeGroupCount.value || 1));
  const perUnitCount = Math.max(1, Number(videoCount.value || 1));
  const desired = Math.max(1, Math.min(localVideoPool.length, unitCount * perUnitCount));
  const shuffled = localVideoPool
    .map((item) => ({ item, sort: Math.random() }))
    .sort((a, b) => a.sort - b.sort)
    .map((entry) => entry.item);
  const selectedIds = new Set(shuffled.slice(0, desired).map((item) => item.id));
  localVideoPool = localVideoPool.map((item) => ({
    ...item,
    selected: selectedIds.has(item.id),
  }));
  renderLocalVideoPool();
  renderCreativeSummary();
}

function clearLocalVideoPool(event) {
  event.preventDefault();
  localVideoPool = [];
  if (localVideoFilesInput) localVideoFilesInput.value = "";
  if (localVideoFolderInput) localVideoFolderInput.value = "";
  renderLocalVideoPool();
  renderCreativeSummary();
}

function openCreativeModal() {
  dynamicCreativeSwitch.value = creativeConfig.dynamicCreativeSwitch || "ON";
  videoHpVisibility.value = creativeConfig.videoHpVisibility || "HIDE_VIDEO_ON_HP";
  creativeGroupCount.value = creativeConfig.groupCount || 1;
  videoCount.value = creativeConfig.videoCount || (creativeConfig.videoIds || []).length || 1;
  imageCount.value = creativeConfig.imageCount || 0;
  titleCount.value = creativeConfig.titleCount || 0;
  creativeGroupName.value = creativeConfig.groupName || "创意组01";
  videoIds.value = (creativeConfig.videoIds || []).join("\n");
  videoCoverIds.value = (creativeConfig.videoCoverIds || []).join("\n");
  creativeEstimate.textContent = `已选创意组：${creativeConfig.groupCount || 1}/500`;
  renderLocalVideoPool();
  creativeModal.classList.add("is-open");
  creativeModal.setAttribute("aria-hidden", "false");
}

function closeCreativeDialog() {
  creativeModal.classList.remove("is-open");
  creativeModal.setAttribute("aria-hidden", "true");
}

function saveCreativeDialog() {
  const groupCount = Number(creativeGroupCount.value || 1);
  if (!Number.isFinite(groupCount) || groupCount < 1 || groupCount > 500) {
    alert("创意组数量必须在 1-500 之间");
    return;
  }

  const perUnitVideoCount = Number(videoCount.value || 0);
  if (!Number.isFinite(perUnitVideoCount) || perUnitVideoCount < 0 || perUnitVideoCount > 30) {
    alert("视频数量必须在 0-30 之间");
    return;
  }

  const next = {
    groupCount,
    videoCount: perUnitVideoCount,
    imageCount: Number(imageCount.value || 0),
    titleCount: Number(titleCount.value || 0),
    groupName: creativeGroupName.value.trim() || "创意组01",
    dynamicCreativeSwitch: dynamicCreativeSwitch.value,
    videoHpVisibility: videoHpVisibility.value,
    videoIds: linesFromTextarea(videoIds),
    videoCoverIds: selectedLocalVideos().length ? [] : linesFromTextarea(videoCoverIds),
    localVideoNames: selectedLocalVideos().map((file) => file.name),
    titles: [],
    titleWordLists: [],
    externalUrls: [],
    productImageIds: [],
  };

  creativeConfig = Object.assign({}, defaultCreativeConfig, next);
  localStorage.setItem("oceanengineCreativeConfig", JSON.stringify(creativeConfig));
  renderCreativeSummary();
  closeCreativeDialog();
}

function clearCreativeConfig(event) {
  event.preventDefault();
  creativeConfig = {
    groupCount: 0,
    videoCount: 0,
    imageCount: 0,
    titleCount: 0,
    groupName: "",
    dynamicCreativeSwitch: "ON",
    videoHpVisibility: "HIDE_VIDEO_ON_HP",
    videoIds: [],
    videoCoverIds: [],
    localVideoNames: [],
    titles: [],
    titleWordLists: [],
    externalUrls: [],
    productImageIds: [],
  };
  localVideoPool = [];
  localStorage.setItem("oceanengineCreativeConfig", JSON.stringify(creativeConfig));
  renderCreativeSummary();
}

function selectedTitlePickMode() {
  const checked = document.querySelector('input[name="titlePickMode"]:checked');
  return checked ? checked.value : "MANUAL";
}

function setTitlePickMode(value) {
  document.querySelectorAll('input[name="titlePickMode"]').forEach((input) => {
    input.checked = input.value === value;
    input.closest(".purpose-card").classList.toggle("is-selected", input.checked);
  });
}

function openTitlePackModal() {
  setTitlePickMode(titlePackConfig.pickMode || "MANUAL");
  titleSource.value = titlePackConfig.source || "TITLE_PACK";
  titleDistribution.value = titlePackConfig.distribution || "REUSE";
  titlePerPromotion.value = titlePackConfig.titlePerPromotion || 5;
  titlePackName.value = titlePackConfig.name || "高手来挪车标题包";
  titleSearchKeyword.value = titlePackConfig.keyword || "";
  titleAccountScope.value = titlePackConfig.accountScope || "ALL";
  titlePackTitles.value = (titlePackConfig.titles || []).join("\n");
  titlePackWordLists.value = (titlePackConfig.titleWordLists || []).join("\n");
  titlePackEstimate.textContent = `已选：${(titlePackConfig.titles || []).length}/200`;
  titlePackModal.classList.add("is-open");
  titlePackModal.setAttribute("aria-hidden", "false");
}

function closeTitlePackDialog() {
  titlePackModal.classList.remove("is-open");
  titlePackModal.setAttribute("aria-hidden", "true");
}

function saveTitlePackDialog() {
  const titles = linesFromTextarea(titlePackTitles).slice(0, 200);
  const perPromotion = Number(titlePerPromotion.value || 5);
  if (!Number.isFinite(perPromotion) || perPromotion < 1 || perPromotion > 200) {
    alert("每条广告标题数必须在 1-200 之间");
    return;
  }

  titlePackConfig = {
    pickMode: selectedTitlePickMode(),
    source: titleSource.value,
    distribution: titleDistribution.value,
    titlePerPromotion: perPromotion,
    name: titlePackName.value.trim() || "高手来挪车标题包",
    keyword: titleSearchKeyword.value.trim(),
    accountScope: titleAccountScope.value,
    titles,
    titleWordLists: linesFromTextarea(titlePackWordLists).slice(0, 200),
  };
  localStorage.setItem("oceanengineTitlePackConfig", JSON.stringify(titlePackConfig));
  renderTitlePackSummary();
  closeTitlePackDialog();
}

function clearTitlePackConfig(event) {
  event.preventDefault();
  titlePackConfig = Object.assign({}, defaultTitlePackConfig, {
    titles: [],
    titleWordLists: [],
  });
  localStorage.setItem("oceanengineTitlePackConfig", JSON.stringify(titlePackConfig));
  renderTitlePackSummary();
}

function shuffleTitlePackConfig(event) {
  event.preventDefault();
  const pairs = (titlePackConfig.titles || []).map((title, index) => ({
    title,
    wordList: (titlePackConfig.titleWordLists || [])[index] || "",
  }));
  for (let index = pairs.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [pairs[index], pairs[randomIndex]] = [pairs[randomIndex], pairs[index]];
  }
  titlePackConfig = Object.assign({}, titlePackConfig, {
    titles: pairs.map((item) => item.title),
    titleWordLists: pairs.map((item) => item.wordList),
  });
  localStorage.setItem("oceanengineTitlePackConfig", JSON.stringify(titlePackConfig));
  renderTitlePackSummary();
}

function selectedLandingItems() {
  return (landingConfig.urls || []).map((url, index) => ({
    url,
    name: (landingConfig.names || [])[index] || `落地页-${index + 1}`,
    id: (landingConfig.ids || [])[index] || String(index + 1059),
    selected: !Array.isArray(landingConfig.selectedUrls) || landingConfig.selectedUrls.includes(url),
  }));
}

function renderLandingRows() {
  const keyword = (landingSearchKeyword.value || "").trim().toLowerCase();
  const items = selectedLandingItems().filter((item) => {
    if (!keyword) return true;
    return item.name.toLowerCase().includes(keyword) || item.url.toLowerCase().includes(keyword);
  });
  if (!items.length) {
    landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">暂无可选落地页</td></tr>`;
    return;
  }
  landingRows.innerHTML = items.map((item, index) => `
    <tr data-landing-index="${index}">
      <td><input type="checkbox" data-landing-url="${escapeHtml(item.url)}" ${item.selected ? "checked" : ""}></td>
      <td>${escapeHtml(item.name)}</td>
      <td>${escapeHtml(item.id || String(index + 1059))}</td>
      <td>1</td>
      <td><a href="${escapeHtml(item.url)}" target="_blank" rel="noreferrer">预览</a></td>
    </tr>
  `).join("");
}

async function loadLandingPages(event) {
  if (event) event.preventDefault();
  if (!location.protocol.startsWith("http")) return;
  const advertiser = primarySelectedAdvertiser();
  const currentExternalAction = projectExternalAction && projectExternalAction.value
    ? projectExternalAction.value
    : projectConfig.externalAction || "";
  const currentMicroAppInstanceId = microAppInstanceId && microAppInstanceId.value
    ? microAppInstanceId.value.trim()
    : projectConfig.microAppInstanceId || "";
  const params = new URLSearchParams({
    advertiser_id: advertiser ? advertiser.advertiser_id : "",
    external_action: currentExternalAction,
    micro_app_instance_id: currentMicroAppInstanceId,
    current_time: new Date().toISOString(),
    keyword: landingSearchKeyword.value.trim(),
    page: "1",
    page_size: "100",
  });
  landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">加载中...</td></tr>`;
  try {
    const response = await apiFetch(`/api/landing-pages?${params.toString()}`);
    const result = await response.json();
    if (!response.ok || result.code !== 0) {
      throw new Error(result.message || "落地页列表获取失败");
    }
    const list = result.data && Array.isArray(result.data.list) ? result.data.list : [];
    if (!list.length) {
      landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">账号内暂无可选落地页</td></tr>`;
      return;
    }
    landingConfig.ids = list.map((item) => item.id);
    landingConfig.urls = list.map((item) => item.url);
    landingConfig.names = list.map((item) => item.name);
    landingConfig.selectedUrls = list.slice(0, landingSelectionLimit()).map((item) => item.url);
    landingUrls.value = landingConfig.urls.join("\n");
    landingNames.value = landingConfig.names.join("\n");
    renderLandingRows();
    updateLandingEstimate();
  } catch (error) {
    landingRows.innerHTML = `<tr><td colspan="5" class="table-empty">${escapeHtml(error.message)}</td></tr>`;
  }
}

function openLandingModal() {
  if (!Array.isArray(landingConfig.selectedUrls)) {
    landingConfig.selectedUrls = (landingConfig.urls || []).slice();
  }
  landingPerPromotion.value = landingConfig.perPromotion || 1;
  landingTypeSource.value = landingConfig.type || "ORANGE";
  landingOnlyDeliverable.value = landingConfig.onlyDeliverable || "ON";
  landingSearchKeyword.value = landingConfig.keyword || "";
  setRadioValue("landingDistribution", landingConfig.distribution || "SAME");
  landingUrls.value = (landingConfig.urls || []).join("\n");
  landingNames.value = (landingConfig.names || []).join("\n");
  landingEstimate.textContent = `已选：${(landingConfig.selectedUrls || []).length}/${landingConfig.perPromotion || 1}`;
  renderLandingRows();
  updateLandingEstimate();
  landingModal.classList.add("is-open");
  landingModal.setAttribute("aria-hidden", "false");
  loadLandingPages();
}

function closeLandingDialog() {
  landingModal.classList.remove("is-open");
  landingModal.setAttribute("aria-hidden", "true");
}

function saveLandingDialog() {
  const urls = linesFromTextarea(landingUrls);
  const names = linesFromTextarea(landingNames);
  const selectedUrlSet = new Set(Array.isArray(landingConfig.selectedUrls) ? landingConfig.selectedUrls : urls);
  const selectedUrls = urls.filter((url) => selectedUrlSet.has(url));
  const selectedNames = urls
    .map((url, index) => ({ url, name: names[index] }))
    .filter((item) => selectedUrlSet.has(item.url))
    .map((item) => item.name)
    .filter(Boolean);
  const perPromotion = Number(landingPerPromotion.value || 1);
  if (!Number.isFinite(perPromotion) || perPromotion < 1 || perPromotion > 20) {
    alert("每个广告配置的落地页数量必须在 1-20 之间");
    return;
  }

  const limit = landingSelectionLimit();
  if (selectedUrls.length > limit) {
    alert(`最多只能选择 ${limit} 个落地页`);
    return;
  }

  landingConfig = {
    perPromotion,
    type: landingTypeSource.value,
    distribution: getRadioValue("landingDistribution") || "SAME",
    onlyDeliverable: landingOnlyDeliverable.value,
    keyword: landingSearchKeyword.value.trim(),
    ids: (landingConfig.ids || []).filter((id, index) => (selectedUrls.length ? selectedUrls : urls).includes(urls[index])),
    urls: selectedUrls.length ? selectedUrls : urls,
    names: selectedNames.length ? selectedNames : names,
    selectedUrls: selectedUrls.length ? selectedUrls : urls,
  };
  localStorage.setItem("oceanengineLandingConfig", JSON.stringify(landingConfig));
  renderLandingSummary();
  closeLandingDialog();
}

function clearLandingConfig(event) {
  event.preventDefault();
  landingConfig = Object.assign({}, defaultLandingConfig, {
    urls: [],
    names: [],
    selectedUrls: [],
  });
  localStorage.setItem("oceanengineLandingConfig", JSON.stringify(landingConfig));
  renderLandingSummary();
}

authButton.addEventListener("click", openAuthDialog);
closeAuthModal.addEventListener("click", closeAuthDialog);
startOAuth.addEventListener("click", startOAuthFlow);
exchangeAuthCode.addEventListener("click", exchangeLocalAuthCode);
refreshOAuth.addEventListener("click", refreshLocalOAuth);
clearOAuth.addEventListener("click", clearLocalOAuth);
updateAuthStatus();
if (new URLSearchParams(location.search).get("oauth") === "success") {
  updateAuthStatus("授权已保存到当前浏览器，可以开始使用。");
  history.replaceState({}, document.title, location.pathname);
}

changeAccount.addEventListener("click", openAccountModal);
closeAccountModal.addEventListener("click", closeModal);
cancelAccountModal.addEventListener("click", closeModal);
reloadAccounts.addEventListener("click", renderAdvertisers);
accountSearch.addEventListener("input", () => {
  resizeAccountSearch();
  renderAdvertisers();
});
clearAccountSearch.addEventListener("click", () => {
  accountSearch.value = "";
  resizeAccountSearch();
  renderAdvertisers();
});
clearSelectedAccount.addEventListener("click", () => {
  selectedAdvertisers = [];
  renderAdvertisers();
});
confirmAccount.addEventListener("click", confirmSelectedAccount);
accountRows.addEventListener("click", (event) => {
  const row = event.target.closest("tr[data-advertiser-id]");
  if (!row) return;
  const advertiser = advertisers.find((item) => item.advertiser_id === row.dataset.advertiserId);
  toggleAdvertiserSelection(advertiser);
  renderAdvertisers();
});

editProject.addEventListener("click", openProjectModal);
closeProjectModal.addEventListener("click", closeProjectDialog);
cancelProjectModal.addEventListener("click", closeProjectDialog);
saveProjectConfig.addEventListener("click", saveProjectDialog);
targetAgeUnlimited.addEventListener("change", () => {
  if (!targetAgeUnlimited.checked) return;
  document.querySelectorAll('input[name="targetAge"]').forEach((input) => {
    input.checked = false;
  });
});
document.querySelectorAll('input[name="targetAge"]').forEach((input) => {
  input.addEventListener("change", () => {
    if (input.checked && targetAgeUnlimited) targetAgeUnlimited.checked = false;
    if (!selectedTargetAges().length && targetAgeUnlimited) targetAgeUnlimited.checked = true;
  });
});
targetRegionSearch.addEventListener("input", renderTargetRegions);
targetRegionClear.addEventListener("click", () => {
  setTargetCities([]);
});
targetProvinceList.addEventListener("change", (event) => {
  const unlimited = event.target.closest("[data-target-region-unlimited]");
  if (unlimited) {
    if (unlimited.checked) setTargetCities([]);
    else renderTargetRegions();
    return;
  }
  const input = event.target.closest("[data-target-province-check]");
  if (!input) return;
  const province = TARGET_REGIONS.find((item) => item.id === Number(input.dataset.targetProvinceCheck));
  if (!province) return;
  activeTargetProvinceId = province.id;
  const selected = new Set(selectedTargetCities());
  province.cities.forEach((city) => {
    if (input.checked) selected.add(city.id);
    else selected.delete(city.id);
  });
  setTargetCities(Array.from(selected));
});
targetProvinceList.addEventListener("click", (event) => {
  const button = event.target.closest("[data-target-province]");
  if (!button) return;
  activeTargetProvinceId = Number(button.dataset.targetProvince);
  renderTargetRegions();
});
targetCityList.addEventListener("change", (event) => {
  const all = event.target.closest("[data-target-city-all]");
  if (all) {
    const province = TARGET_REGIONS.find((item) => item.id === Number(all.dataset.targetCityAll));
    const selected = new Set(selectedTargetCities());
    (province ? province.cities : []).forEach((city) => {
      if (all.checked) selected.add(city.id);
      else selected.delete(city.id);
    });
    setTargetCities(Array.from(selected));
    return;
  }
  const cityInput = event.target.closest('input[name="targetCity"]');
  if (!cityInput) return;
  const cityId = Number(cityInput.value);
  if (Number.isFinite(cityId)) {
    if (cityInput.checked) selectedTargetCityIds.add(cityId);
    else selectedTargetCityIds.delete(cityId);
  }
  renderTargetRegions();
});
editAdInfo.addEventListener("click", openAdInfoModal);
closeAdInfoModal.addEventListener("click", closeAdInfoDialog);
cancelAdInfoModal.addEventListener("click", closeAdInfoDialog);
saveAdInfoConfig.addEventListener("click", saveAdInfoDialog);
selectAwemeAccount.addEventListener("click", openAwemeModal);
closeAwemeModal.addEventListener("click", closeAwemeDialog);
reloadAwemeAccounts.addEventListener("click", loadAwemeAccounts);
awemeSearch.addEventListener("click", renderAwemeAccounts);
awemeKeyword.addEventListener("input", renderAwemeAccounts);
awemeRows.addEventListener("click", (event) => {
  const button = event.target.closest("[data-aweme-id]");
  if (!button) return;
  useAwemeAccount(button.dataset.awemeId);
});
editCreative.addEventListener("click", openCreativeModal);
closeCreativeModal.addEventListener("click", closeCreativeDialog);
cancelCreativeModal.addEventListener("click", closeCreativeDialog);
saveCreativeConfig.addEventListener("click", saveCreativeDialog);
clearCreative.addEventListener("click", clearCreativeConfig);
chooseVideoFiles.addEventListener("click", () => localVideoFilesInput.click());
chooseVideoFolder.addEventListener("click", () => localVideoFolderInput.click());
localVideoFilesInput.addEventListener("change", () => addLocalVideoFiles(localVideoFilesInput.files));
localVideoFolderInput.addEventListener("change", () => addLocalVideoFiles(localVideoFolderInput.files));
randomLocalVideos.addEventListener("click", randomPickLocalVideos);
clearLocalVideos.addEventListener("click", clearLocalVideoPool);
localVideoList.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[data-local-video-id]');
  if (!checkbox) return;
  localVideoPool = localVideoPool.map((item) => (
    item.id === checkbox.dataset.localVideoId
      ? { ...item, selected: checkbox.checked }
      : item
  ));
  renderLocalVideoPool();
  renderCreativeSummary();
});
editTitlePack.addEventListener("click", openTitlePackModal);
closeTitlePackModal.addEventListener("click", closeTitlePackDialog);
cancelTitlePackModal.addEventListener("click", closeTitlePackDialog);
saveTitlePackConfig.addEventListener("click", saveTitlePackDialog);
clearTitlePack.addEventListener("click", clearTitlePackConfig);
shuffleTitlePack.addEventListener("click", shuffleTitlePackConfig);
editLanding.addEventListener("click", openLandingModal);
closeLandingModal.addEventListener("click", closeLandingDialog);
cancelLandingModal.addEventListener("click", closeLandingDialog);
saveLandingConfig.addEventListener("click", saveLandingDialog);
clearLanding.addEventListener("click", clearLandingConfig);
landingRefresh.addEventListener("click", loadLandingPages);
landingSearchKeyword.addEventListener("input", renderLandingRows);
landingPerPromotion.addEventListener("input", updateLandingEstimate);
document.querySelectorAll('input[name="landingDistribution"]').forEach((input) => {
  input.addEventListener("change", updateLandingEstimate);
});
landingClearSearch.addEventListener("click", () => {
  landingSearchKeyword.value = "";
  renderLandingRows();
});
landingRows.addEventListener("change", (event) => {
  const checkbox = event.target.closest('input[data-landing-url]');
  if (!checkbox) return;
  const selected = new Set(Array.isArray(landingConfig.selectedUrls) ? landingConfig.selectedUrls : (landingConfig.urls || []));
  if (checkbox.checked) {
    const limit = landingSelectionLimit();
    if (selected.size >= limit) {
      checkbox.checked = false;
      alert(`最多只能选择 ${limit} 个落地页`);
      return;
    }
    selected.add(checkbox.dataset.landingUrl);
  } else {
    selected.delete(checkbox.dataset.landingUrl);
  }
  landingConfig.selectedUrls = Array.from(selected);
  updateLandingEstimate();
  landingEstimate.textContent = `已选：${landingConfig.selectedUrls.length}/${landingConfig.perPromotion || 1}`;
  updateLandingEstimate();
});
landingOpenOrange.addEventListener("click", () => {
  alert("当前先使用已填写的落地页链接创建。后续可继续接入橙子建站/落地页资产列表接口。");
});
selectWechatGame.addEventListener("click", openMiniGameModal);
closeMiniGameModal.addEventListener("click", closeMiniGameDialog);
miniGameSearch.addEventListener("click", () => {
  miniGamePage = 1;
  loadMiniGames();
});
miniGameKeyword.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    miniGamePage = 1;
    loadMiniGames();
  }
});
miniGamePageSize.addEventListener("change", () => {
  miniGamePage = 1;
  loadMiniGames();
});
miniGamePrev.addEventListener("click", () => {
  if (miniGamePage <= 1) return;
  miniGamePage -= 1;
  loadMiniGames();
});
miniGameNext.addEventListener("click", () => {
  if (miniGamePage >= miniGameTotalPage) return;
  miniGamePage += 1;
  loadMiniGames();
});
miniGameManage.addEventListener("click", () => {
  alert("管理小游戏需要跳转巨量/资产后台，当前先在本地选择已有权限的小游戏。");
});
miniGameSort.addEventListener("change", () => {
  miniGames = miniGames.slice().reverse();
  renderMiniGames();
});
miniGameRows.addEventListener("click", (event) => {
  const button = event.target.closest(".use-mini-game");
  if (!button) return;
  const row = event.target.closest("tr[data-instance-id]");
  if (!row) return;
  useMiniGame(row.dataset.instanceId);
});

document.querySelectorAll('input[name="titlePickMode"]').forEach((input) => {
  input.addEventListener("change", () => setTitlePickMode(input.value));
});

["relatedTask", "deliveryProduct", "microMatchMode", "workbenchVersion", "budgetConfigMode", "scheduleType", "scheduleTimeMode", "bidStrategy", "budgetMode", "pricing", "budgetOptimizeSwitch", "bidBudgetMode", "landingDistribution"].forEach((name) => {
  document.querySelectorAll(`input[name="${name}"]`).forEach((input) => {
    input.addEventListener("change", () => {
      setRadioValue(name, input.value);
      if (name === "bidStrategy") updateBidStrategyPreview();
      if (name === "deliveryProduct") updateMiniGameHeaders();
    });
  });
});

updateMiniGameHeaders();

document.querySelectorAll('input[name="landingType"]').forEach((input) => {
  const card = input.closest(".purpose-card");
  card.addEventListener("click", () => {
    document.querySelectorAll('input[name="landingType"]').forEach((item) => {
      item.closest(".purpose-card").classList.remove("is-selected");
    });
    card.classList.add("is-selected");
  });
});
