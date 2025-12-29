import { createSlice } from '@reduxjs/toolkit';
import { SliceType } from '../../const';
import { Offer, CurrentOffer } from '../../types/offer';
import { Review } from '../../types/review';
import { fetchOffersAction, fetchOfferAction, fetchReviewsAction, fetchNearbyOffersAction, postCommentAction } from '../api-action';

type OffersState = {
  offers: Offer[];
  isOffersDataLoading: boolean;
  currentOffer: CurrentOffer | null;
  isCurrentOfferLoading: boolean;
  reviews: Review[];
  nearbyOffers: Offer[];
};

const initialState: OffersState = {
  offers: [],
  isOffersDataLoading: false,
  currentOffer: null,
  isCurrentOfferLoading: false,
  reviews: [],
  nearbyOffers: [],
};

export const offersSlice = createSlice({
  name: SliceType.Offers,
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(fetchOffersAction.pending, (state) => {
        state.isOffersDataLoading = true;
      })
      .addCase(fetchOffersAction.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.isOffersDataLoading = false;
      })
      .addCase(fetchOfferAction.pending, (state) => {
        state.isCurrentOfferLoading = true;
      })
      .addCase(fetchOfferAction.fulfilled, (state, action) => {
        state.currentOffer = action.payload;
        state.isCurrentOfferLoading = false;
      })
      .addCase(fetchReviewsAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(postCommentAction.fulfilled, (state, action) => {
        state.reviews = action.payload;
      })
      .addCase(fetchNearbyOffersAction.fulfilled, (state, action) => {
        state.nearbyOffers = action.payload;
      });
  }
});
