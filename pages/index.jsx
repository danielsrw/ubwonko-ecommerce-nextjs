/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import db from '../utils/db';
import NextLink from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Product from '../models/Product';
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import Carousel from 'react-material-ui-carousel';
import { Layout, ProductItem } from '../components';
import { Grid, Link, Typography } from '@material-ui/core';

export default function Home() {
    return (
        <div>
            <Layout>
                <div>
                    <h1>Products</h1>
                    <ul>
                        <li>Product 1</li>
                        <li>Product 2</li>
                        <li>Product 3</li>
                    </ul>
                </div>
            </Layout>
        </div>
    )
}
