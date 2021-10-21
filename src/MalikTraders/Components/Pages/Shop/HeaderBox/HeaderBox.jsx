const HeaderBox= props=><div class="card  shadow h-30 py-1">
            <div class="card-body">
                <div class="row no-gutters align-items-center">
                    <div class="col mr-2">
                        <div class="text-xs font-weight-bold text-primary text-uppercase mb-1">
                            Current Amount</div>
                        <div class="h5 mb-0 font-weight-bold text-gray-800">PKR {props.currentAmount}/-</div>
                    </div>
                    <div class="col-auto">
                        <i class="fas fa-calendar fa-2x text-gray-300"></i>
                    </div>
                </div>
            </div>
          </div>

export default HeaderBox;