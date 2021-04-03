import { OwnerWithShops } from "types/models";
import fetchReq from "utils/fetch";
import toBase64 from "utils/toBase64";
import userServices from "services/user";


/**
 * 
 * @param owner - данные владельца и его заведения(ий)
 * @description Создание аккаунта владельца с заведением
 */
const createOwnerWithShops = async (owner: OwnerWithShops) => {
  const formattedOwner = {
    ...owner,
    telegramChatId: +owner.telegramChatId,
    /**
     * Форматируем заведения в нужный вид.
     * Обработка логотипов происходит в ассинхронном режиме,
     * поэтому здесь используется Promise.all
     */
    shops: await Promise.all(
      owner.shops.map(async (shop) => {
        const logo = (await toBase64(shop.logo[0])) as string;
        return {
          ...shop,
          logo: logo,
        };
      })
    ),
  };
  await userServices.createOwnerWithShops(formattedOwner);
};

export default { createOwnerWithShops };
