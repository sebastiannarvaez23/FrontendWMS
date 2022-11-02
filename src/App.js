
import './App.css';
import React from 'react';
import { SlideBar } from './SlideBar';
import { LogoSlideBar } from './SlideBar/LogoSlideBar';
import { SlideLinks } from './SlideBar/SlideLinks';
import { Picking } from './Picking';
import { SaleOrderControl } from './Picking/SaleOrderControl';
import { DashBoardSaleOrder } from './Picking/SaleOrderControl/DashBoardSaleOrder';
import { InfoSaleOrder } from './Picking/SaleOrderControl/InfoSaleOrder';
import { PickingControl } from './Picking/PickingControl';
import { DashBoardPicking } from './Picking/PickingControl/DashBoardPicking';
import { IndicatorsPicking } from './Picking/PickingControl/IndicatorsPicking';
import { PickingItem } from './Picking/PickingControl/DashBoardPicking/PickingItem';
import { StautusPickingIndicator } from './Picking/PickingControl/IndicatorsPicking/StautusPickingIndicator';

function App() {

  const pickingList = [
    { id: 1, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 2 },
    { id: 2, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 3 },
    { id: 3, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 4 },
    { id: 4, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 5 },
    { id: 5, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 2 },
    { id: 6, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 3 },
    { id: 7, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 1 },
    { id: 8, status: 'PA', comment: '', userCreated: 'Sebastian Narvaez', dateCreated: '07/02/2022', userModifed: 'Sebastian Narvaez', dateModified: '07/02/2022', numberBox: 4 },
  ]


  return (
    <React.Fragment>

      <SlideBar>
        <LogoSlideBar />
        <SlideLinks />
      </SlideBar>

      <Picking>
        <SaleOrderControl>
          <DashBoardSaleOrder />
          <InfoSaleOrder />
        </SaleOrderControl>

        <PickingControl>
          <DashBoardPicking>

            {pickingList.map(picking => (
              <PickingItem
                key={picking.id}
                status={picking.status}
                comment={picking.comment}
                userCreated={picking.userCreated}
                dateCreated={picking.dateCreated}
                userModifed={picking.userModifed}
                dateModified={picking.dateModified}
                numberBox={picking.numberBox}
              />
            ))}
            
          </DashBoardPicking>
          
          <IndicatorsPicking>
            <StautusPickingIndicator />
            <StautusPickingIndicator />
          </IndicatorsPicking>

        </PickingControl>

      </Picking>

    </React.Fragment>
  );
}

export default App;