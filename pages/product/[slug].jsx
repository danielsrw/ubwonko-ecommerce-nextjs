import axios from 'axios';
import Image from 'next/image';
import db from '../../utils/db';
import NextLink from 'next/link';
import data from '../../utils/data';
import { useRouter } from 'next/router';
import { useSnackbar } from 'notistack';
import { Store } from '../../utils/Store';
import { Layout } from '../../components';
import useStyles from '../../utils/styles';
import Product from '../../models/Product';
import Rating from '@material-ui/lab/Rating';
import { getError } from '../../utils/error';
import React, { useContext, useEffect, useState } from 'react';
import { Grid, Link, List, ListItem, Typography, Card, Button, TextField, CircularProgress } from '@material-ui/core';

export default function ProductScreen(props) {
	const router = useRouter()
	const { slug } = router.query
	const product = data.products.find((a) => a.slug === slug)
	const classes = useStyles()

	if (!product) {
		return <div>Product Not Found</div>
	}

	return (
		<Layout title={product.name} description={product.description}>
			<div className={classes.section}>
		        <NextLink href="/" passHref>
		          	<Link>
		            	<Typography>back to products</Typography>
		          	</Link>
		        </NextLink>
	      	</div>
			<Grid container spacing={1}>
				<Grid item md={6} xs={12}>
		          	<Image src={product.image} alt={product.name} width={640} height={640} layout="responsive" />
		        </Grid>
		        <Grid item md={3} xs={12}>
		          	<List>
			            <ListItem>
			              	<Typography component="h1" variant="h1">
			                	{product.name}
			              	</Typography>
			            </ListItem>
			            <ListItem>
			              	<Typography>Category: {product.category}</Typography>
			            </ListItem>
			            <ListItem>
			              	<Typography>Brand: {product.brand}</Typography>
			            </ListItem>
			            <ListItem>
			              	<Rating value={product.rating} readOnly></Rating>
			              	<Link href="#reviews">
			                	<Typography>({product.numReviews} reviews)</Typography>
			              	</Link>
			            </ListItem>
			            <ListItem>
			              	<Typography> Description: {product.description}</Typography>
			            </ListItem>
		          	</List>
		        </Grid>
		        <Grid item md={3} xs={12}>
		          	<Card>
			            <List>
			              	<ListItem>
				                <Grid container>
				                  	<Grid item xs={6}>
				                    	<Typography>Price</Typography>
				                  	</Grid>
				                  	<Grid item xs={6}>
				                    	<Typography>${product.price}</Typography>
				                  	</Grid>
				                </Grid>
			              	</ListItem>
			              	<ListItem>
				                <Grid container>
				                  	<Grid item xs={6}>
				                    	<Typography>Status</Typography>
				                  	</Grid>
				                  	<Grid item xs={6}>
				                    	<Typography>
				                      	{product.countInStock > 0 ? 'In stock' : 'Unavailable'}
				                    	</Typography>
				                  	</Grid>
				                </Grid>
			              	</ListItem>
			              	<ListItem>
				                <Button fullWidth variant="contained" color="primary" >
				                  	Add to cart
				                </Button>
			              	</ListItem>
			            </List>
		          	</Card>
		        </Grid>
			</Grid>
			<List>
		        <ListItem>
		          	<Typography name="reviews" id="reviews" variant="h2">
		            	Customer Reviews
		          	</Typography>
		        </ListItem>
		    </List>
		</Layout>
	)
}