import React, { useEffect, useState } from "react";
import styled from "styled-components";

import Section from "./Section"



function Home() {



    return (

        <Container className="container1">

                <Section
                    title="Model S"
                    description="Order Online for Touchless Delivery"
                    backImg="model-s.jpg"
                    leftBtnTxt="Custom Order"
                    RightBtnTxt="Existing Inventory"
                    name="sec1"
                />
                <Section
                    title="Model Y"
                    description="Order Online for Touchless Delivery"
                    backImg="model-y.jpg"
                    leftBtnTxt="Custom Order"
                    RightBtnTxt="Existing Inventory"
                    name="sec2"


                />
                <Section
                    title="Model 3"
                    description="Order Online for Touchless Delivery"
                    backImg="model-3.jpg"
                    leftBtnTxt="Custom Order"
                    RightBtnTxt="Existing Inventory"
                    name="sec3"

                />
                <Section
                    title="Model X"
                    description="Order Online for Touchless Delivery"
                    backImg="model-x.jpg"
                    leftBtnTxt="Custom Order"
                    RightBtnTxt="Existing Inventory"
                    name="sec4"

                />

                <Section
                    title="Lowest Cost Solar Panels in America"
                    description="Money-back Gurantee"
                    backImg="solar-panel.jpg"
                    leftBtnTxt="Order Now"
                    RightBtnTxt="Learn More"
                    name="sec5"

                />

                <Section
                    title="Solar for New Roofs"
                    description="Solar Roofs Cost Less Than a New Roof Plus Solar Panel"
                    backImg="solar-roof.jpg"
                    leftBtnTxt="Order Now"
                    RightBtnTxt="Learn More"
                    name="sec6"

                />

                <Section
                    title="Accessories"
                    description=""
                    backImg="accessories.jpg"
                    leftBtnTxt="Shop Now"
                    name="sec7"

                />

                
        </Container>
            )
}


            export  default Home

            const Container=styled.div`
            height:100vh;
            z-index:1;
            scroll-snap-type:y mandatory;



            `