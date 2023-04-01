import React from 'react';
import './CBDstyle.css';
import { BsInfoCircle } from "react-icons/bs";
import ButtonContainer from '../components/buttonContainer/ButtonContainer'


const CostBreakDown = () => {
    return (
        <div className='cbd_parent'>

            <div className="cbd_child">

                <div className="cbd_header">

                    <div>
                        <span className='page_no'>5 </span>
                        <span className='pages'>Pages</span>
                    </div>

                    <div>
                        <h2>$300</h2>
                        <p className='price_heading'>Page Desgin</p>
                    </div>

                    <div>
                        <h2>$200</h2>
                        <p className='price_heading'>Interactions & Animations</p>
                    </div>

                    <div>
                        <h2>$100</h2>
                        <p className='price_heading'>CMS/Dynamic Data/Integrations</p>
                    </div>

                    <div>
                        <p className='sub_total'>Sub Total</p>
                        <h2 className='total'>$800</h2>
                    </div>

                </div>

                <div className='line'></div>

                <div className="table_header">

                    <div className='table_heading'>
                        <span className='pages'>Pages</span><BsInfoCircle />
                    </div>

                    <div className='table_heading'>
                        <span className='pages'>Design</span><BsInfoCircle />
                    </div>

                    <div className='table_heading'>
                        <span className='pages'>Interactions & Animations</span><BsInfoCircle />
                    </div>

                    <div className='table_heading'>
                        <span className='pages'>Integration</span><BsInfoCircle />
                    </div>

                    <div className='table_heading'>
                        <span className='pages'>Cost</span><BsInfoCircle />
                    </div>

                </div>

                <div>
                  <ButtonContainer
                    slNo={'01.'}
                    name={'Home'}
                    cost={'$200'}
                  />
                  <ButtonContainer
                    slNo={'02.'}
                    name={'Service'}
                    cost={'$200'}
                  />
                  <ButtonContainer
                    slNo={'03.'}
                    name={'About Us'}
                    cost={'$200'}
                  />
                  <ButtonContainer
                    slNo={'04.'}
                    name={'Partners'}
                    cost={'$200'}
                  />
                  <ButtonContainer
                    slNo={'05.'}
                    name={'Contact Us'}
                    cost={'$200'}
                  />
                </div>
            </div>

        </div>
    )
}

export default CostBreakDown