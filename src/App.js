
import { Space } from 'antd';
import './App.css';
import AppFooter from './components/AppFooter';
import AppHeader from './components/AppHeader';
import PageContent from './components/PageContent';
import SideMenu from './components/SideMenu';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <Space className='SideMenuAndPageContent'>
        <SideMenu></SideMenu>
        <PageContent></PageContent>
      </Space>
      <AppFooter />
    </div>
  );
}

export default App;
