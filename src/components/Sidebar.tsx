import React from 'react';
import { Sidebar } from 'flowbite-react';
import { GiHouse, GiSoccerBall, GiBasketballBall, GiBaseballGlove } from 'react-icons/gi'

export default function SidebarNav() {
  return (
    <Sidebar className="h-screen w-1/5 text-white">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Sidebar.Item
            href="/"
            icon={GiHouse}
          >
            <p>Home</p>
          </Sidebar.Item>
          <Sidebar.Collapse
            icon={GiSoccerBall}
            label="Categories"
          >
            <Sidebar.Item href="/sport/football" icon={GiSoccerBall}>
              Football
            </Sidebar.Item>
            <Sidebar.Item href="/sport/basketball" icon={GiBasketballBall}>
              Basketball
            </Sidebar.Item>
            <Sidebar.Item href="/sport/baseball" icon={GiBaseballGlove}>
              Baseball
            </Sidebar.Item>
          </Sidebar.Collapse>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  )
}