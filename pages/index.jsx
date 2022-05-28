/* eslint-disable @next/next/no-img-element */
import axios from 'axios';
import db from '../utils/db';
import data from '../utils/data';
import NextLink from 'next/link';
import { useContext } from 'react';
import { Store } from '../utils/Store';
import Product from '../models/Product';
import { useRouter } from 'next/router';
import useStyles from '../utils/styles';
import Carousel from 'react-material-ui-carousel';
import { Layout, ProductItem } from '../components';
import { Grid, Link, Typography, Card, CardActionArea, CardMedia, CardContent, CardActions, Button } from '@material-ui/core';

export default function Home() {
    return (
        <div>
            <Layout>
                <div>
                    <h1>Products</h1>
                    <Grid container spacing={3}>
                        {data.products.map((product) => (
                            <Grid item md={4} key={product.name}>
                                <Card>
                                    <NextLink href={`/product/${product.slug}`} passHref>
                                        <CardActionArea>
                                            <CardMedia component='img' image={product.image} title={product.name} />
                                            <CardContent>
                                                <Typography>
                                                    {product.name}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </NextLink>
                                    <CardActions>
                                        <Typography>
                                            ${product.price}
                                        </Typography>
                                        <Button size='small' color='primary'>
                                            Add to Cart
                                        </Button>
                                    </CardActions>
                                </Card>
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Layout>
        </div>
    )
}
