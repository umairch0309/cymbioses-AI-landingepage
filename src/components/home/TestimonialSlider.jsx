import { Container } from "reactstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TestimonialSliderWrapper } from "@styles/TestimonialSliderStyled";
import { Paragraph } from "@styles/ElementsStyled";
import { HeadingStyled, Box, SpanStyled } from "../../styles/ElementsStyled";
import { testimonialsData } from "@utils/staticData";

const TestimonialSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <Container className="mt-5 pb-5">
      <TestimonialSliderWrapper className="pt-5 px-5 mb-5">
        <Box className="text-center mb-5">
          <SpanStyled
            className="text-purple text-uppercase border py-1 px-2 rounded-pill"
            $weight={500}
          >
            Testimonials
          </SpanStyled>
          <HeadingStyled className="text-white mt-2 pt-1" $size="36px">
            Hear it from our users
          </HeadingStyled>
        </Box>
        <Slider {...settings}>
          {testimonialsData.map((item, key) => (
            <div key={"item__" + key + 1}>
              <div className="text-center px-5">
                <Paragraph $size="22px" $weight="400" className="text-white">
                  {item.text}
                </Paragraph>
                <SpanStyled className="text-white">{item.user}</SpanStyled>
              </div>
            </div>
          ))}
        </Slider>
      </TestimonialSliderWrapper>
    </Container>
  );
};

export default TestimonialSlider;
