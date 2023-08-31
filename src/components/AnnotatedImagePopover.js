import { Popover, Container, Typography } from "@mui/material";

const AnnotatedImagePopover = ({annotatedImagePopoverDetails, isMobile}) => {
    return(
        <Popover
          id={annotatedImagePopoverDetails.id}
          anchorEl={annotatedImagePopoverDetails.anchorEl}
          open={annotatedImagePopoverDetails.open}
          onClose={annotatedImagePopoverDetails.onClose}
          sx={{pointerEvents: 'none',}}
          slotProps={{paper: {style: {maxWidth: isMobile() ? '80%' : '30%', backgroundColor: '#111212', color: 'white'}}}}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'bottom',
            horizontal: 'center',
          }}
        >
          <Container sx={{textAlign:'center'}}>
            <div style={{paddingTop: isMobile() ? `calc(${annotatedImagePopoverDetails.aspectRatio}*80vw)` : `calc(${annotatedImagePopoverDetails.aspectRatio}*30vw)`}}>
              <img src={annotatedImagePopoverDetails.image} width='100%' style={{top:'0rem', left:'0rem', position: 'absolute'}}/> 
            </div>
            <Container sx={{padding: '0.5rem'}}>
              <Typography variant="body1" sx={{ typography: { sm: 'body1', xs: 'body2' } }}>{annotatedImagePopoverDetails.textContent}</Typography>
            </Container>
          </Container>
        </Popover>
    );
};

export default AnnotatedImagePopover;