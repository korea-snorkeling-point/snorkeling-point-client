import SnorkelingPointCard from '@components/commons/Card/normalCard/snorkelingPoincard/snorkelingPointCard';
import DecoratedText from '@components/commons/text/decoratedText/decoratedText';
import { Col, Row } from 'antd';
import Slider from 'react-slick';
import BestPointItem from './bestPointItem/bestPointItem';
import * as S from './snorkelingPointList.styles';

type SnorkelingPointListUIPropsType = {
  bestPoints: any[];
};
export default function SnorkelingPointListUI({
  bestPoints,
}: SnorkelingPointListUIPropsType) {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };

  return (
    <S.Wrapper>
      <S.TitleWrapper>
        <DecoratedText value="Best 5" />
      </S.TitleWrapper>
      <S.TitleWrapper marginBottom={40}>
        <DecoratedText value="스노클링 포인트 ✨" />
      </S.TitleWrapper>

      <S.BestPointSliderWrapper>
        <Slider {...settings}>
          {(bestPoints || []).map((item: any) => (
            <BestPointItem />
          ))}
        </Slider>
      </S.BestPointSliderWrapper>

      <S.TitleWrapper marginTop={100}>
        <DecoratedText value="🤿" />
      </S.TitleWrapper>
      <S.TitleWrapper>
        <DecoratedText value="방금 업로드된" />
      </S.TitleWrapper>
      <S.TitleWrapper marginBottom={50}>
        <DecoratedText value="스노클링 포인트" />
      </S.TitleWrapper>

      <S.PointListWrapper>
        <Row gutter={32} justify="space-between">
          {Array(20)
            .fill('hi')
            .map((item: any) => (
              <Col xs={32} sm={12} md={8} lg={6}>
                <SnorkelingPointCard />
              </Col>
            ))}
        </Row>
      </S.PointListWrapper>
    </S.Wrapper>
  );
}
