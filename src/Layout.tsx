import { Avatar, Layout, Menu, Space, type MenuProps } from "antd";
import { useEffect, useState } from "react";
import { Link, Outlet, useLocation } from "react-router";
import {
    UserOutlined, DollarOutlined, ShareAltOutlined
} from '@ant-design/icons';
import MenuItem from "antd/es/menu/MenuItem";
const { Header, Content, Sider } = Layout;
type MenuItem = Required<MenuProps>['items'][number];
export default function AppLayout() {
    const location = useLocation();
    const [collapsed, setCollapsed] = useState(location.pathname === "/");
    const [noHeader, setNoHeader] = useState(location.pathname === "/");
    useEffect(() => {
        setNoHeader(location.pathname === "/");
    }, [location.pathname]);
    const items: MenuItem[] = [
        {
            key: '/kafka-ui',
            icon: <ShareAltOutlined />,
            label: (
                <Link to="/kafka-ui">Kafka UI</Link>
            )
        },
        {
            key: '/vietlott',
            icon: <DollarOutlined />,
            label: (
                <Link to="/vietlott">Vietlott</Link>
            )
        }
    ]
    return (
        <Layout className="h-screen">
            <Sider theme="dark" collapsible collapsed={collapsed} onCollapse={(value) => setCollapsed(value)}>
                <div className="flex items-center justify-center p-4">
                    <Avatar size={50} icon={<UserOutlined />} />
                </div>
                <Menu theme="dark" selectedKeys={[location.pathname]} mode="inline" items={[]} />
            </Sider>
            <Layout className="h-full overflow-hidden">
                {/* {!noHeader && <Header></Header>} */}
                <Content className="overflow-auto h-full">
                    <Outlet />
                </Content>
            </Layout>
        </Layout>)
}