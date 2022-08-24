import logo from './logo.svg';
import './App.css';
import React from 'react';
import { SlideBar } from './SlideBar';
import { LogoSlideBar } from './LogoSlideBar';
import { SlideLinks } from './SlideLinks';
import { Picking } from './Picking';
import { SaleOrderControl } from './SaleOrderControl';
import { DashBoardSaleOrder } from './DashBoardSaleOrder';
import { InfoSaleOrder } from './InfoSaleOrder';
import { PickingControl } from './PickingControl';
import { DashBoardPicking } from './DashBoardPicking';
import { IndicatorsPicking } from './IndicatorsPicking';
import { PickingItem } from './PickingItem';
import { StautusPickingIndicator } from './StautusPickingIndicator';

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