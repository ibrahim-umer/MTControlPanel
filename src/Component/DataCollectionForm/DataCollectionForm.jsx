function App() {
    return (
      <>
        <Switch>
          <Route path="/shop" exact component={Shop} />
          <Route path="/" exact component={Home} />
          <Route path="/register" exact component={Register} />
          <Route path="/login" exact component={Login} />
          
        </Switch>
      </>
    );
  }
  
  //Exports 
  export default App;