import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './components/home/index';
import DateTimePicker from './components/logo/index';
import Appbar from './components/appbar/index';
import Inbox from './components/inbox/index';
import Email from './components/mail/index';
import SendMail from './components/sendmail/index';
import Add from './components/add/index';
import Detail from './components/detail';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Home />} />
        <Route path='datetimepicker' element={<DateTimePicker />} />
        <Route path='appbar' element={<Appbar />} />
        <Route path='admin'>
          <Route path='inbox'>
            <Route path='' element={<Inbox />} />
            <Route path='add' element={<Add />} />
            <Route path=':id' element={<Detail />} />
          </Route>
          <Route path='email' element={<Email />} />
          <Route path='sendmail' element={<SendMail />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
