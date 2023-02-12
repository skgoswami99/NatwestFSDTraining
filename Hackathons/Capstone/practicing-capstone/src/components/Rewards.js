import React from "react";
import { Box, ButtonBase, Card, Grid } from "@mui/material";
import "./Rewards.css";

export default function Rewards() {
  return (
    <>
      <Box sx={{ display: "flex", backgroundColor: "rgb(196, 230, 250)" }}>
        <div>
          <section
            class="services-section section-padding section-bg"
            id="services-section"
          >
            <main class="container">
              <div class="row mb-2">
                <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <h3 class="mb-0">Gifting has become Digital</h3>

                      <p class="card-text mb-auto">
                        Create your own digital gift card for your loved ones using your wallet balance.
                      </p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img
                        src="./Images/gf2.jpg"
                        class="services-image img-fluid"
                        id="imgd"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <h3 class="mb-0">Get assured rewards on every wallet transactions</h3>

                      <p class="mb-auto">
                        No transaction is a small transaction , you will be rewarded everytime you use the wallet service and move money!!!
                      </p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img
                        src="./Images/r1.png"
                        class="services-image img-fluid"
                        id="imgd"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </main>


            <main class="container">
              <div class="row mb-2">
                <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <h3 class="mb-0">New offers Rolled on</h3>

                      <p class="card-text mb-auto">
                        Keep checking the offer section for coupons and other excited surprises.
                      </p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img
                        src="./Images/offer1.jpg"
                        class="services-image img-fluid"
                        id="imgd"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
                    <div class="col p-4 d-flex flex-column position-static">
                      <h3 class="mb-0">Guaranteed Cashback</h3>

                      <p class="mb-auto">
                        Use your cashback for Mobile top up, transfer and manymore things.
                      </p>
                    </div>
                    <div class="col-auto d-none d-lg-block">
                      <img
                        src="./Images/reward3.jpg"
                        class="services-image img-fluid"
                        id="imgd"
                        alt=""
                      ></img>
                    </div>
                  </div>
                </div>
              </div>
            </main>

            
          </section>
        </div>
      </Box>
    </>
  );
}
