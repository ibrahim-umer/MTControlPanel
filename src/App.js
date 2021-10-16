//Library Imports
import { Route, Switch } from 'react-router';

//All Css Imports
import './App.css';

//Component Imports
import MTHome from './MalikTraders/MalikTraderApp';
import Login from './MalikTraders/Components/Pages/Login/Login'
import UserManagement from './MalikTraders/Components/Pages/UserManagement/UserManagement';
import AccountDetails from './MalikTraders/Components/Pages/AccountManagement/ShowAccountDetails';
import PaymentHistory from './MalikTraders/Components/Pages/AccountManagement/PaymentHistory/PaymentHistory';
import CreateNewUser from './MalikTraders/Components/Pages/UserManagement/CreateUser/CreateUser';
import AttachWithNewScheme from './MalikTraders/Components/Pages/UserManagement/AttachWithNewScheme/AttachtoNewScheme';
import ProductManager from './MalikTraders/Components/Pages/ProductManager/ProductManager'
import AddNewProduct from './MalikTraders/Components/Pages/ProductManager/AddNewProduct/AddNewProduct';
import ModifyPayment from './MalikTraders/Components/Pages/AccountManagement/ModifyPayment/ModifyPayment';

//window.$domain = 'https://maliktraders20211011002845.azurewebsites.net/' //global variable
window.$domain = 'https://localhost:44302/' //global variable

//Start 
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MTHome} />
        <Route path='/Products' exact  component={ProductManager} />
        <Route path='/AddProduct' exact  component={AddNewProduct} />
        <Route path="/manageuser" exact component={UserManagement} />
        <Route path="/ShowAccountDetails/:id" component={AccountDetails} />
        <Route path='/Accounts/:id/Payment' component={PaymentHistory} />
        <Route path={'/CreateUser'} component={CreateNewUser}/>
        <Route path='/User/:id/AddtoNewScheme' exact component={AttachWithNewScheme} />
        <Route path='/login' component={Login} />
        <Route path={'/account/payment/modification/:id'} component={ModifyPayment}/>
      </Switch>
    </>
  );
}

//Exports 
export default App;
