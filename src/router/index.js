import React from 'react'

import ZDDiscover from "@/pages/discover"
import ZDFriend from "@/pages/friend"
import ZDMine from "@/pages/mine"
import ZDSong from "@/pages/discover/song"
import ZDAlbum from "@/pages/discover/album"
import ZDArtist from "@/pages/discover/artist"
import ZDDjradio from "@/pages/discover/djradio"
import ZDRadioCategoryContent from "@/pages/discover/djradio/cpns/radio-category-content"
import ZDSongList from '@/pages/discover/songlist'
import ZDRadioMain from "@/pages/discover/djradio/cpns/radio-main"
import ZDRanking from "@/pages/discover/ranking"
import ZDRecommend from "@/pages/discover/recommend"
import ZDPlaylist from "@/pages/discover/playlist"



import {Redirect} from "react-router-dom"


const routes = [
  {
    path: "/",
    exact: true,
    render: () => {
      return <Redirect to="/discover"/>
    },
  },
  {
    path: "/discover",
    component: ZDDiscover,
    routes: [
      {
        path: '/discover',
        exact: true,
        render: () => {
          return <Redirect to="/discover/recommend" />
        }
      },
      {
        path: '/discover/recommend',
        component: ZDRecommend
      },
      {
        path: '/discover/ranking',
        component: ZDRanking
      },
      {
        path: '/discover/playlist',
        component: ZDPlaylist
      },
      {
        path: '/discover/songlist',
        component: ZDSongList
      },
      {
        path: '/discover/djradio',
        component: ZDDjradio,
        routes: [
          {
            path: '/discover/djradio',
            exact: true,
            render: () => {
              return <Redirect to="/discover/djradio/category?id=2001"/>
            },
        
            // component: ZDRadioMain
          },
          {
            path: '/discover/djradio/category',
            component: ZDRadioCategoryContent
          }
        ]
      },
      {
        path: '/discover/artist',
        component: ZDArtist
      },
      {
        path: '/discover/album',
        component: ZDAlbum
      },
      {
        path: '/discover/song',
        component: ZDSong
      }
    ]

  },
  {
    path: "/friend",
    component: ZDFriend
  },
  {
    path: "/mine",
    component: ZDMine
  }
]

export default routes