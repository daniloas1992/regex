texto = 'supermercado superação hiperMERCADO'

# (?:super)  : Grupo que identifica a palavra "super" e não armazena o conteúdo
# [\wÀ-ú]+    : equivale a [A-Za-z0-9_] e caracteres com acentuação com um ou mais caracteres
# 
puts texto.scan(/(?:super)[\wÀ-ú]+/i)

#Positive lookbehind  (?<= )
# Olha o vem antes e pega o que tem depois (Prefixo)



# (?<=super)  : Grupo que identifica a palavra "super" para pegar que tiver a seguir
# [\wÀ-ú]+    : equivale a [A-Za-z0-9_] e caracteres com acentuação com um ou mais caracteres
# Busca palavras que sejam posterior à palavra "super"
puts texto.scan(/(?<=super)[\wÀ-ú]+/i)



#Negative lookbehind  (?<! )
# Olha o vem antes NÃO pode ser o termo buscado

# (?<=super) : Grupo que identifica a palavra "super" 
# mercado    : "mercado"
# Busca por palavras que terminem com "mercado" e NÃO comece com "super"
puts texto.scan(/(?<!super)mercado/i)