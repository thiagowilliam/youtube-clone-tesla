import React from 'react';

import * as S from './styles';
import DefaultOverlayContent from '../DefaultOverlayContent';
import { ModelsWrapper, ModelSection } from '../Model';

import UniqueOverlay from '../UniqueOverlay';

const Page: React.FC = () => {
  return (
    <S.Container>
      <ModelsWrapper>
        <div>
          {[
            'Model Ones',
            'Model Twos',
            'Model three',
            'Model Four',
            'Model Five',
            'Model Six',
            'Model Seven',
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                // eslint-disable-next-line react/jsx-wrap-multilines
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <S.Spacer />
        <UniqueOverlay />
      </ModelsWrapper>
    </S.Container>
  );
};

export default Page;
