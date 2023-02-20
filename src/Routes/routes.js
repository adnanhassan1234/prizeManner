import LandingPage from "Pages/LandingPage";
import Home from "Pages/Home/loadable";
import User from "Pages/User/loadable";
import Profile from "Pages/Profile/loadable";
import NotFound from "Pages/NotFound/loadable";

import MainLayout from "Layout/MainLayout";
import AuthLayout from "../Layout/AuthLayout";
import Login from "../Pages/Auth/login";
import Signup from "../Pages/Auth/signup";
import SendOTP from "../Pages/Auth/otp";
import VerifyAccount from "../Pages/Auth/verifyAccount";
import CreateNewPassword from "../Pages/Auth/createNewPassword";
import Dashboard from "../Pages/Dashboard";
import AllSubAdmin from "../Pages/AllSubAdmin";
import BuildMap from "Pages/BuildMap";
import CreatMap from "Pages/Maps/CreatMap";
import Maps from "../Pages/Maps";
import PrizeInfo from "Pages/PrizeInfo";
import Winners from "Pages/Winners";
import LeaderBoard from "Pages/LeaderBoard";
import Users from "Pages/User";
import UserProfile from "Pages/User/UserProfile";
import stakePurchased from "Pages/User/StakePurchasedLog";
import TotalPurchased from "Pages/User/TotalPurchased";
import Tool from "Pages/Tool";
import Assets from "Pages/Assets";
import Music from "Pages/Music";
import ExchangeRate from "Pages/ExchangeRate";
import GuideLines from "Pages/GuideLines";
import AddTool from "Pages/Tool/AddTool";
import PushNotif from "Pages/PushNotif";
import AddMusic from "Pages/Music/AddMusic";
import Ads from "Pages/Ads";
import AddExchange from "Pages/Music/AddExchange";
import Tutorial from "Pages/Tutorial";
import AddVedioTutorial from "Pages/Tutorial/AddVedioTutorial";
import Support from "Pages/Support";
import CreateAssets from "Pages/Assets/Substrates/CreateAssets";
import ForGetPassword from "../Pages/Auth/ForGetPassword";
import AddPrize from "../Pages/PrizeInfo/AddPrize";
import UpdateTool from "../Pages/Tool/UpdateTool";



const routes = [
  //{ path: "/", component: LandingPage },
  /*{ path: "/all-sub-admins",
    layout: MainLayout,
    component: AllSubAdmin
  },*/
  { path: "/home",
    component: Home,
    layout: MainLayout ,
  },
  {
    path: "/user",
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: User,
      },
      {
        path: "/profile",
        component: Profile,
      },
    ],
  },
  { path: "/",
    layout: AuthLayout,
    component: Login
  },

  {
    path: "/signup",
    layout: AuthLayout,
    subRoutes: [
      {
        path: "/",
        component: Signup,
      },
      {
        path: "/verify-account",
        component: VerifyAccount,
      },
    ],
  },

  { path: "/create-new-password",
    layout: AuthLayout,
    component: CreateNewPassword
  },
  { path: "/otp",
    layout: AuthLayout,
    component: SendOTP
  },
  { path: "/forgetpassword",
    layout: AuthLayout,
    component: ForGetPassword,
  },
  { path: "/dashboard",
    layout: MainLayout,
    component: Dashboard,
  },
  { path: "/dashboard/all-sub-admins",
    layout: MainLayout,
    component: AllSubAdmin
  },
  { path: "/create-assets",
    layout: MainLayout,
    component: CreateAssets
  },
  {
    path: "/maps",
    layout: MainLayout,
    subRoutes: [
      {
        path: "/",
        component: Maps,
      },
      {
        path: "/create-map",
        component: CreatMap
      },
    ],
  },
  {
    path: "/build-map",
    layout: MainLayout,
    component: BuildMap
  },
  {
    path: "/ads",
    layout: MainLayout,
    component: Ads
  },
  {
    path: "/ads/add-exchange",
    layout: MainLayout,
    component: AddExchange
  },
  {
    path: "/tutorial",
    layout: MainLayout,
    component: Tutorial
  },
  {
    path: "/add-vedio-tutorial",
    layout: MainLayout,
    component: AddVedioTutorial
  },


  { path: "*", component: NotFound,
    layout: MainLayout
  },

  {
    path: "/prize-info",
    layout: MainLayout,
    component: PrizeInfo
  },
  {
    path: "/prize-info/add-prize",
    layout: MainLayout,
    component: AddPrize,
  },

  {
    path: "/winner",
    layout: MainLayout,
    component: Winners
  },

  {
    path: "/leader-board",
    layout: MainLayout,
    component: LeaderBoard
  },
  {
    path: "/users",
    layout: MainLayout,
    component: Users
  },
  {
    path: "/users/User-Profile",
    layout: MainLayout,
    component: UserProfile
  },

  {
    path: "/Stake_Purchased_Log",
    layout: MainLayout,
    component: stakePurchased
  },
  {
    path: "/TotalPurchased",
    layout: MainLayout,
    component: TotalPurchased
  },

  {
    path: "/TotalPurchased",
    layout: MainLayout,
    component: TotalPurchased
  },
  {
    path: "/tools",
    layout: MainLayout,
    component: Tool
  },
  {
    path: "/tools/add-tool",
    layout: MainLayout,
    component: AddTool,
  },
  {
    path: "/tools/edit-tool",
    layout: MainLayout,
    component: UpdateTool,
  },
  {
    path: "/assets",
    layout: MainLayout,
    component: Assets
  },
  {
    path: "/assets",
    layout: MainLayout,
    component: Assets
  },
  {
    path: "/music",
    layout: MainLayout,
    component: Music
  },
  {
    path: "/music/add-music",
    layout: MainLayout,
    component: AddMusic
  },
  {
    path: "/exchange",
    layout: MainLayout,
    component: ExchangeRate
  },
  {
    path: "/guidelines",
    layout: MainLayout,
    component: GuideLines
  },
  {
    path: "/notifications",
    layout: MainLayout,
    component: PushNotif,
  },

  {
    path: "/support",
    layout: MainLayout,
    component: Support,
  },
];

export default routes;
