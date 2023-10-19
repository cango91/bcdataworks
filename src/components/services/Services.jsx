import { Box, Grid, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

export default function Services() {
    const {t, i18n} = useTranslation();
    const lang = i18n.language;
    const info = require(`../../info/Info.${lang}.js`).info;
    return (
        <>
            <Box display={'flex'} alignItems={'center'} width={"100%"} padding={"30px 20px"}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>🤝🏻 {t('collaborations')}</Typography>
                        <List>
                            {info.collabs.map((item, index) => (<ListItem key={index}> <ListItemText primary={item} /> </ListItem>))}
                        </List>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Typography variant="h4" gutterBottom>📖 {t('courses')}</Typography>
                        <List> {info.courses.map((item, index) => (<ListItem key={index}> <ListItemText primary={item} /> </ListItem>))}
                        </List>
                    </Grid>
                </Grid>
            </Box>
        </>

    );
}