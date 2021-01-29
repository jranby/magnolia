package td.apps.commands.base;

import info.magnolia.commands.impl.BaseRepositoryCommand;
import info.magnolia.context.Context;
import td.apps.util.AllianceNewsCurlFunctions;

import javax.jcr.Node;

public class DoAllianceNewsCommand extends BaseRepositoryCommand {

	final AllianceNewsCurlFunctions cUrl = new AllianceNewsCurlFunctions();

	@Override
    public boolean execute(final Context context) throws Exception {

    	cUrl.getAllianceNews();

    	return true;
    }
}