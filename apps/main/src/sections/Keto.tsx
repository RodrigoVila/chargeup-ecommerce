import Image from 'next/legacy/image'
import ketoImg from '@packages/assets/images/keto-graphic2.png'

import { Section } from './components'
import { useIntl } from 'react-intl'

export const KetoSection = () => {
  const { formatMessage } = useIntl()
  return (
    <Section id='keto' title={formatMessage({ id: 'KETO_TITLE' })} withOverlay={false}>
      <div className='text-black'>
        <p className='py-2'>{formatMessage({ id: 'KETO_PARAGRAPH_1' })}</p>
        <p className='py-2'>{formatMessage({ id: 'KETO_PARAGRAPH_2' })}</p>
        <p className='py-2'>{formatMessage({ id: 'KETO_PARAGRAPH_3' })}</p>
        <p className='py-2'>{formatMessage({ id: 'KETO_PARAGRAPH_4' })}</p>
        <p className='py-2'>{formatMessage({ id: 'KETO_PARAGRAPH_5' })}</p>
        <div className='h-screen/2 relative my-8 w-full bg-contain'>
          <Image src={ketoImg} alt='Keto Diet Graphic' objectFit='contain' layout='fill' />
        </div>
        <h4 className='font-dinBold w-full pb-4 pt-8 text-3xl lg:text-left'>
          {formatMessage({ id: 'KETO_TIPICAL_FOOD_TITLE' })}
        </h4>
        <ul className='flex flex-col px-4 text-left'>
          <li>{formatMessage({ id: 'KETO_TIPICAL_FOOD_OPT_1' })}</li>
          <li>{formatMessage({ id: 'KETO_TIPICAL_FOOD_OPT_2' })}</li>
          <li>{formatMessage({ id: 'KETO_TIPICAL_FOOD_OPT_3' })}</li>
          <li>{formatMessage({ id: 'KETO_TIPICAL_FOOD_OPT_4' })}</li>
          <li>{formatMessage({ id: 'KETO_TIPICAL_FOOD_OPT_5' })}</li>
          <li>{formatMessage({ id: 'KETO_TIPICAL_FOOD_OPT_6' })}</li>
        </ul>
        <h4 className='font-dinBold w-full pb-4 pt-8 text-3xl lg:text-left'>
          {formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_TITLE' })}
        </h4>
        <ul className='flex flex-col px-4 pb-10 text-left'>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_1' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_2' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_3' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_4' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_5' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_6' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_7' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_8' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_9' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_10' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_11' })}</li>
          <li>{formatMessage({ id: 'KETO_NOT_TIPICAL_FOOD_OPT_12' })}</li>
        </ul>
      </div>
    </Section>
  )
}
