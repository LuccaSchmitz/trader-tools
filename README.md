# Informações gerais:

Banca = valor de sua Banca
Meta = Porcentagem de lucro ( Recomendado 5% à 20% )
Stoploss = Banca _ 40% ( x _ 0.4 )
Stopwin = Banca _ Meta _ 2 % ( x _ ( ( y _ 2 ) / 100 ) )

# Mão comum:

Entrada = Banca _ 2% ( x _ 0.02 )
Entrada Leve = Entrada / 2

# Mão alavancada:

Entrada = Banca _ 10% ( x _ 0.10 )
Entrada Leve = Entrada / 2

# Gales

Valor perdido = Entrada perdida
Gale de recuperação = Valor perdido / Payout
Gale com Lucro de 1 mão = (Valor perdido / Payout) + Entrada

# Entrada Loss

Valor perdido = Entrada perdido + Gale perdido
Loss de recuperação = Valor perdido / Payout
Loss com lucro = Loss de recuperação + Entrada

# OBS:

Não entrar em sinais com menos de 60% de Payout
Não fazer Gale com sinais com menos de 65% de payout

# Banco de dados = MongoDB ou Local Storage

Users = Lista com usuários
