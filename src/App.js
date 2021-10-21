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
import Shop from './MalikTraders/Components/Pages/Shop/Shop';
import NewTransection from './MalikTraders/Components/Pages/Shop/NewTransection/NewTransection';
import CreateShop from './MalikTraders/Components/Pages/Shop/CreateShop/CreateShop';

//window.$domain = 'https://maliktraders20211011002845.azurewebsites.net/' //global variable
window.$domain = 'https://localhost:44302/' //global variable

//Start 
function App() {
  return (
    <>
      <Switch>
        <Route path="/" exact component={MTHome} />

        <Route exact path='/login' component={Login} />

        <Route path="/ManageUser" exact component={UserManagement} />
        <Route path="/ShowAccountDetails/:id" component={AccountDetails} />
        <Route path='/Accounts/:id/Payment' component={PaymentHistory} />
        <Route exact path={'/CreateUser'} component={CreateNewUser}/>

        <Route exact path='/User/:id/shop' component={Shop}/>
        <Route exact path='/User/:id/Shop/:shopId/NewTransection' component={NewTransection} />
        <Route exact path='/User/:id/Create-Shop-Account' component={CreateShop} />

        <Route exact path='/Products'  component={ProductManager} />
        <Route exact path='/AddProduct'  component={AddNewProduct} />
        
        
        <Route path='/User/:id/AddtoNewScheme' exact component={AttachWithNewScheme} />
        <Route path={'/Account/Payment/Modification/:id'} component={ModifyPayment}/>
      </Switch>
    </>
  );
}

//Exports 
export default App;
