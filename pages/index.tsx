import Image from 'next/image';
import Commitment from '../components/home/Commitment';
import Contribution from '../components/home/Contribution';
import Hero from '../components/home/Hero';
import Village from '../components/home/Village';

import Button from '../components/shared/Button';
import Input from '../components/shared/Input';
import SEO from '../components/shared/SEO';

export default function Home() {
  return (
    <>
      <SEO title='Home' />
      <Hero>
        <img src='/svg/home-bg-1.svg' alt='' className='img-background' />
        <div className='icon-container'>
          <div className='img-container'>
            <Image
              src='/svg/home-water-icon.svg'
              alt='water icon'
              layout='fill'
            />
          </div>
        </div>
        <div className='info-container'>
          <div className='main-container'>
            <p>FAKTANYA</p>
            <h1>
              2 dari 10 orang Indonesia kesulitan dalam mengakses air bersih.{' '}
            </h1>
            <Button>Pelajari Lebih Lanjut</Button>
          </div>
        </div>
      </Hero>

      <Village>
        <img
          src='/svg/home-bg-2.svg'
          alt='background image'
          className='line-bg'
        />
        <div className='container'>
          <div className='img-container'>
            <img
              src='/svg/home-bg-rd-2.svg'
              alt='background image'
              className='img-bg-rd'
            />
            <img
              src='/png/home-village.png'
              alt='desa mekarlaksana'
              className='village-img'
            />
            <div className='img-bg'></div>
            <div className='text-bg'></div>
          </div>
          <div className='info-container'>
            <h4>PILOT PROJECT</h4>
            <h2>
              Harapan untuk Desa
              <br />
              Mekarlaksana
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              nisl morbi dictumst sed tincidunt consectetur congue nulla. Sed
              quis ornare eu augue consequat turpis eget volutpat. Habitasse
              velit laoreet urna, cursus lorem at et etiam justo.{' '}
            </p>
            <a href=''>Pelajari Lebih Lanjut</a>
          </div>
        </div>
      </Village>

      <Commitment>
        <h2>Komitmen Kami</h2>
        <div className='list-container'>
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/money-icon.svg'
                alt='logo uang'
                width={54}
                height={42}
              />
            </div>
            <div className='info-container'>
              <h4>Donasi 100%</h4>
              <p>
                Dana donasi tersalurkan sepenuhnya untuk kegiatan pengadaan air.
              </p>
              <p className='--important'>
                *Kegiatan operasional telah ditanggung oleh donatur.
              </p>
            </div>
          </div>
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/target-icon.svg'
                alt='logo uang'
                width={64}
                height={64}
              />
            </div>
            <div className='info-container'>
              <h4>Teknologi Tepat Guna</h4>
              <p>
                Solusi teknologi yang digunakan menyesuaikan dengan permasalahan
                di setiap daerah.
              </p>
            </div>
          </div>
        </div>
        <div className='list-container'>
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/people-icon.svg'
                alt='logo uang'
                width={64}
                height={64}
              />
            </div>
            <div className='info-container'>
              <h4>Akuntabilitas</h4>
              <p>
                Semua projek yang ada dibuktikan dengan hasil dan data real-time
                dengan bantuan teknologi Internet of Things (IoT)
              </p>
            </div>
          </div>
          <div className='item-container'>
            <div className='icon-container'>
              <Image
                src='/svg/clock-icon.svg'
                alt='logo uang'
                width={64}
                height={64}
              />
            </div>
            <div className='info-container'>
              <h4>Program Berkelanjutan</h4>
              <p>
                Bekerjasama dengan organisasi setempat dan local-champion dalam
                mengusahakan keberlanjutan
              </p>
            </div>
          </div>
        </div>
        <img
          src='/svg/home-bg-3.svg'
          alt='background image'
          className='img-bg'
        />
      </Commitment>

      <Contribution>
        <h2>Kontribusi Kami</h2>
        <div className='container'>
          <div className='info-container'>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
              nisl morbi dictumst sed tincidunt consectetur congue nulla. Sed
              quis ornare eu augue consequat turpis eget volutpat. Habitasse
              velit laoreet urna, cursus lorem at et etiam justo. Faucibus vitae
              magna leo semper lacus pulvinar cursus.
            </p>
          </div>
          <div className='detail-container'>
            <h4>20.000</h4>
            <p>Masyarakat</p>
            <h4>2160</h4>
            <p>L/Jam</p>
          </div>
        </div>
        <div className='email-container'>
          <h3>Ingin Membantu Kami?</h3>
          <Input placeholder='Alamat Email' width='30%' margin={'.8rem 0'} />
          <Button>Donasi</Button>
        </div>
      </Contribution>
    </>
  );
}
