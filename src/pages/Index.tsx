import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Icon from '@/components/ui/icon';

interface Token {
  id: number;
  name: string;
  symbol: string;
  price: number;
  change24h: number;
  marketCap: string;
  volume: string;
  featured?: boolean;
}

const Index = () => {
  const [tokens] = useState<Token[]>([
    {
      id: 1,
      name: 'The Future Network',
      symbol: 'TFN',
      price: 2.847,
      change24h: 12.45,
      marketCap: '$1.2B',
      volume: '$450M',
      featured: true
    },
    {
      id: 2,
      name: 'Bitcoin',
      symbol: 'BTC',
      price: 43250.50,
      change24h: 3.21,
      marketCap: '$845B',
      volume: '$28B'
    },
    {
      id: 3,
      name: 'Ethereum',
      symbol: 'ETH',
      price: 2280.75,
      change24h: -1.45,
      marketCap: '$274B',
      volume: '$12B'
    },
    {
      id: 4,
      name: 'Solana',
      symbol: 'SOL',
      price: 98.32,
      change24h: 8.76,
      marketCap: '$42B',
      volume: '$2.1B'
    },
    {
      id: 5,
      name: 'Cardano',
      symbol: 'ADA',
      price: 0.58,
      change24h: -2.34,
      marketCap: '$20B',
      volume: '$850M'
    },
    {
      id: 6,
      name: 'Polkadot',
      symbol: 'DOT',
      price: 7.23,
      change24h: 5.67,
      marketCap: '$9.5B',
      volume: '$420M'
    }
  ]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    }).format(price);
  };

  const featuredToken = tokens.find(t => t.featured);

  return (
    <div className="min-h-screen bg-background">
      <nav className="border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Icon name="TrendingUp" size={32} className="text-primary" />
              <span className="text-2xl font-heading font-bold text-foreground">CryptoHub</span>
            </div>
            <div className="flex items-center space-x-6">
              <a href="#tokens" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Токены
              </a>
              <a href="#markets" className="text-muted-foreground hover:text-primary transition-colors font-medium">
                Рынки
              </a>
              <Button variant="outline" size="sm">
                <Icon name="User" size={16} className="mr-2" />
                Войти
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {featuredToken && (
        <section className="py-20 bg-gradient-to-br from-background via-background to-primary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12 animate-fade-in">
                <Badge className="mb-4 bg-primary/20 text-primary border-primary/30 px-4 py-1">
                  Флагманский токен
                </Badge>
                <h1 className="text-6xl font-heading font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
                  {featuredToken.name}
                </h1>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
                  Инновационная криптовалютная платформа для профессиональных инвесторов
                </p>
              </div>

              <Card className="bg-card/80 backdrop-blur-sm border-border/50 shadow-2xl animate-scale-in">
                <CardContent className="p-8">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Текущая цена</div>
                      <div className="text-4xl font-bold text-foreground font-heading mb-2">
                        {formatPrice(featuredToken.price)}
                      </div>
                      <div className={`flex items-center justify-center space-x-1 text-lg ${
                        featuredToken.change24h >= 0 ? 'text-green-500' : 'text-red-500'
                      }`}>
                        <Icon name={featuredToken.change24h >= 0 ? 'TrendingUp' : 'TrendingDown'} size={20} />
                        <span>{Math.abs(featuredToken.change24h)}%</span>
                      </div>
                    </div>

                    <div className="text-center border-l border-r border-border/50">
                      <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Капитализация</div>
                      <div className="text-4xl font-bold text-foreground font-heading mb-2">
                        {featuredToken.marketCap}
                      </div>
                      <div className="text-sm text-muted-foreground">Рыночная стоимость</div>
                    </div>

                    <div className="text-center">
                      <div className="text-sm text-muted-foreground mb-2 uppercase tracking-wide">Объем торгов</div>
                      <div className="text-4xl font-bold text-foreground font-heading mb-2">
                        {featuredToken.volume}
                      </div>
                      <div className="text-sm text-muted-foreground">За 24 часа</div>
                    </div>
                  </div>

                  <div className="mt-8 flex justify-center space-x-4">
                    <Button size="lg" className="px-8 font-medium">
                      <Icon name="ShoppingCart" size={20} className="mr-2" />
                      Купить {featuredToken.symbol}
                    </Button>
                    <Button size="lg" variant="outline" className="px-8 font-medium">
                      <Icon name="LineChart" size={20} className="mr-2" />
                      Смотреть график
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      <section id="tokens" className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-heading font-bold text-foreground mb-4">Все токены</h2>
            <p className="text-muted-foreground text-lg">
              Полный каталог криптовалют с актуальными данными рынка
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {tokens.map((token, index) => (
              <Card 
                key={token.id} 
                className="bg-card border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:scale-105 cursor-pointer group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <CardTitle className="text-2xl font-heading">{token.symbol}</CardTitle>
                    <Badge 
                      variant={token.change24h >= 0 ? "default" : "destructive"}
                      className="flex items-center space-x-1"
                    >
                      <Icon name={token.change24h >= 0 ? 'ArrowUp' : 'ArrowDown'} size={14} />
                      <span>{Math.abs(token.change24h)}%</span>
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground">{token.name}</p>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <div className="text-3xl font-bold text-foreground font-heading group-hover:text-primary transition-colors">
                        {formatPrice(token.price)}
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-border/50">
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Капитализация</div>
                        <div className="text-sm font-semibold text-foreground">{token.marketCap}</div>
                      </div>
                      <div>
                        <div className="text-xs text-muted-foreground mb-1 uppercase tracking-wide">Объем 24ч</div>
                        <div className="text-sm font-semibold text-foreground">{token.volume}</div>
                      </div>
                    </div>

                    <Button 
                      className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all" 
                      variant="outline"
                    >
                      <Icon name="ArrowRight" size={16} className="mr-2" />
                      Подробнее
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border bg-card/30 py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="TrendingUp" size={24} className="text-primary" />
                <span className="text-xl font-heading font-bold">CryptoHub</span>
              </div>
              <p className="text-muted-foreground text-sm">
                Профессиональная платформа для торговли криптовалютами
              </p>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Платформа</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">API</a></li>
              </ul>
            </div>

            <div>
              <h3 className="font-heading font-semibold mb-4">Поддержка</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Помощь</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Контакты</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">FAQ</a></li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
            © 2024 CryptoHub. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
